import React, {useEffect, useState }from 'react'
import { useDebounce } from 'use-debounce'
import { useContextProvider } from '../context/ResultContext'
import Anchors from './Anchors'


function Search() {
  const [ text, setText ] = useState("Juan Manuel Sanjurjo Linkedin")
  const { setSearchTerm } = useContextProvider()
  const debounceValue = useDebounce(text , 300) // milisegundos

  // useEffect(() => {
  //   if(debounceValue) setSearchTerm(debounceValue)

  // }, [debounceValue])


  return (
    <div className='realtive sm:ml-48 md:ml-75 sm:-mt-10 mt-3'>
        <input value={text} 
        type='text' 
        className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        placeholder='Search'
        onChange={(e) => setText(e.target.value)}
        />
      <Anchors />
    </div>
  )
}

export default Search