import React from 'react'
import {Link } from "react-router-dom"
import Search from './Search'

function Navbar({darktheme, setDarkTheme}) {
  return (
    <div className='p-5 pb-5 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to="/">
                <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-4 rounded dark:bg-gray-500 dark:text-grey-900'>
                    Search
                </p>
            </Link>
                <button type='button' onClick={() => setDarkTheme(!darktheme)} 
                    className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-4 py-1 hover:shadow-lg dark:hover:shadow-zinc-300'>
                    {darktheme ? `Light \u2600` : "Dark \u263D"}                
                </button>
        </div>
       <Search />
    </div>
  )
}

export default Navbar