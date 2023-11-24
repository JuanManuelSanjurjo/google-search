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

    if (isLoading) return <Loading />


    switch(location.pathname){
        case "/search":
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
        case "/images":
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {results?.result.map(({image, title, thumbnai, url }, i) => {
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
        case "/videos":
            return "videos"

            break;
        case "/news":
            return "news"

            break;
        default:
            return "error"
            break;
        
    }


}

export default Results