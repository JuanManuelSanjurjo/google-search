import React, {useContext, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useContextProvider  } from '../context/ResultContext'
import Loading from './Loading'


function Results() {
    const { results, isLoading, getResult, searchTerm} = useContextProvider()
    const location = useLocation()


    useEffect(()=>{
        if(searchTerm){
            getResult(location.pathname, searchTerm)
        }
    }, [searchTerm, location.pathname])

    if (!isLoading) return <Loading />


    switch(location.pathname){
        case "/websearch":
            return (
                <div className='flex flex-wrap justify-between space-y-6  sm:px-56'>
                    { results?.result?.map(({title, href, body}, i) =>  
                        (
                        <div key={i} className='md:w-2/5'>
                            <a href={href} target='_blank' rel='nonreferrer'>
                                <p className='text-sm'>
                                    {href.length > 30 ? href.substring(0,30) + "..." : href}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {title}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                    {body.length > 30 ? href.substring(0,60) + "..." : body}
                                </p>
                            </a>
                        </div>
                        )
                    )}
                </div>
            )
            break;
        case "/imagesearch":
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {results?.result?.map(({image, title, thumbnail, url }, i) => {
                        (
                            <a className='sm:p-3 p-5' href='{url}' target='_blank' rel='nonreferrer'>

                                    <img src={image} alt={title} loading='lazy'></img>
                                    <p className='w-36 break-words text-sm mt-2'></p>
                            </a>
                        )

                    })}

                </div>
            )

            break;
        case "/videosearch":
            return (
                <div className='flex flex-wrap'>
                    {
                        results?.result?.map(({title, uploader, content, duration, embed_html, publisher}, i) => (
                            <div key={i}>
                                {content && <ReactPlayer  url={content} controls width="355px" height="200px"/>}
                            </div>
                        ))
                    }
                </div>
            )

            break;
        case "/":
            return (
            <div className='flex flex-wrap justify-between space-y-6  sm:px-56 items-center'>
                { results?.news?.map(({date, title, body, url, image, source}, i) =>  
                    (
                    <div key={i} className='md:w-2/5 w-full'>
                        <a href={url} target='_blank' rel='nonreferrer'>
                            <p className='text-sm'>
                                {url.length > 30 ? href.substring(0,30) + "..." : url}
                            </p>
                        </a>
                        
                            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                {title} 
                                <a href={source} target='_blank' rel="nonreferrer">
                                    {source}
                                </a>
                            </p>
                            <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                {body.length > 30 ? href.substring(0,60) + "..." : body}
                            </p>
                    </div>
                    )
                )}
            </div>
        )
            break;
        default:
            return "error"
            break;
        
    }


}

export default Results