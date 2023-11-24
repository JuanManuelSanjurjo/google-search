import React from 'react'
import {InfinitySpin}  from "react-loader-spinner"


function Loading() {
  return (
    <div className='flex justify-center items-center'>
      <InfinitySpin  
            className='self-center'
            width='200'
            height='500'
            color="#00bfff"
        />
    </div>
  )
}

export default Loading