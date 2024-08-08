
import React, { useEffect, useState } from 'react';
import Home from './home/Home';
import Router from './router/Router';
import CartContext from './context/Context';


const App = () => {
const[cart,setCart] =useState(0);

 useEffect(() => {
   
   const cart =JSON.parse(localStorage.getItem('cart')) ||[] 
    
   setCart(cart.length)
 }, [])
 

  return (
    <>

    <CartContext.Provider value={{cart,setCart}}>

   
    <Home />

    </CartContext.Provider>

    <Router />
    
    </>
    
  )
}

export default App