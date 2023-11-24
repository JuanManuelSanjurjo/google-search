import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        url: "/websearch", text: "all",
        url: "/", text: "news",
        url: "/imagesearch", text: "images",
        url: "/videosearch", text: "videos",
    }
]

function Anchors() {
  return (
    <div className='flex sm:justify-around justify-between items-center mt-4'>
        {links.map(({url,text}, i) => {
            (

                <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                    {text}
                </NavLink>
            )
        })
        }

    </div>
  )
}

export default Anchors