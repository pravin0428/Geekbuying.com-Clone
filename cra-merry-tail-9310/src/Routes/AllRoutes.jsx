import React from 'react'
import {Routes , Route} from "react-router-dom"
import PrivateRoute from '../Components/PrivateRoute'
import CartPage from '../Pages/CartPage'
import ChekoutPage from '../Pages/ChekoutPage'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Payment from '../Pages/Payment'
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
    <Route path='/cartpage/:id' element={ <CartPage/> } /> 
    <Route path='/payment' element={ <Payment/> } /> 
    <Route path='/chekoutPage' element={<PrivateRoute> <ChekoutPage/></PrivateRoute>} />
    
     
     {/* single product page */}
    
   
    </Routes>
    </>
  )
}

export default AllRoutes