import React from 'react'
import {InfinitySpin}  from "react-loader-spinner"


function Loading() {
  return (
    <div>
       <InfinitySpin 
            // type="puff"
            width='200'
            height='500'
            color="#00bfff"
        />
    </div>
  )
}

export default Loading