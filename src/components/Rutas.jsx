import React, { useEffect } from 'react'
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import Results from './Results'

function Rutas() {
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === "/") navigate('/websearch');
  }, []);
  
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path="/" />

        <Route exact path='/websearch' element={<Results />} />
        <Route exact path='/imagesearch' element={<Results />} />
        <Route exact path='/' element={<Results />} />
        <Route exact path='/videosearch' element={<Results />} />
            
      </Routes>
    </div>
  )
}

export default Rutas