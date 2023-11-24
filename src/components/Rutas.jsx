import React, { useEffect } from 'react'
import {Routes, Route, useNavigate, useLocation} from "react-router-dom"
import Results from './Results'

function Rutas() {
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === "/") navigate('/search');
  }, []);
  
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path="/" />

        <Route exact path='/search' element={<Results />} />
        <Route exact path='/images' element={<Results />} />
        <Route exact path='/news' element={<Results />} />
        <Route exact path='/videos' element={<Results />} />
            
      </Routes>
    </div>
  )
}

export default Rutas