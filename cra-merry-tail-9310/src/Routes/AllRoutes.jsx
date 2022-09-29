import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import ShopingPage from '../Pages/ShopingPage'
function AllRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/regitration' element={<Registration/>} />
    <Route path='/shopingPage' element={<ShopingPage/>} />
    
   
    </Routes>
    </>
  )
}

export default AllRoutes