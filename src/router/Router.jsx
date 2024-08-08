import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import About from '../component/about/About'
import Contact from '../component/contact/Contact'
import Navbar from '../config/Navbar'

const Router = () => {
  return (

      <>

   < BrowserRouter >
    <Navbar />
   <Routes >

    <Route   path='/'  element = {<Home />}   />
    <Route   path='about'  element = {<About />}   />
    <Route   path='contact'  element = {<Contact />}   />


   </Routes>
   
   
   
   
   </BrowserRouter>

      



    
    </>
  )
}

export default Router