import React from 'react'
import Home from './Home/Home.jsx'
import { Routes ,Route } from 'react-router-dom'
import Location from './components/D/Location.jsx'


const App = () => {
  return (
    <>
     
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='*' element={<Home/>}/>

       <Route path='location' element={<Location/>}/>
      </Routes>
    </>
  )
}

export default App
