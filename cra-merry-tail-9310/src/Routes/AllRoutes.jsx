import React from 'react'
import {Routes , Route} from "react-router-dom"
import PrivateRoute from '../Components/PrivateRoute'
import CartPage from '../Pages/CartPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import ShopingPage from '../Pages/ShopingPage'
import ShowCart from '../Pages/ShowCart'
function AllRoutes() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/regitration' element={<Registration/>} />
    <Route path='/shopingPage' element={<ShopingPage/>} />
    
    <Route path='/cartpage/:id' element={ <PrivateRoute><CartPage/></PrivateRoute>} />
    
   
    </Routes>
    </>
  )
}

export default AllRoutes