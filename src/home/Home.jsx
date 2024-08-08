import React from 'react';
import DrawerAppBar from './DrawerAppBar';
import ImgMediaCard from './ImgMediaCard';
import BasicModal from './BasicModal';
import { useSearchParams } from "react-router-dom";




// axios
import axios from 'axios';

import { useEffect,useState } from 'react';



    // axios to get data from fakeapi

    const Home = () => {

      const [data,setData] =useState([])
      const [open,setOpen] =useState(false)
      const[singleProduct,setSingleProduct] =useState({})
      // let [searchParams, setSearchParams] = useSearchParams();  nhi cha lrah hai



       const viewDetais =(id)=>{
        console.log("hello",id)

        axios.get(`https://fakestoreapi.com/products/${id}`)
       .then((res)=>{
        console.log(res.data,"single product")
        setSingleProduct(res.data)
        
       })
       }

      useEffect(() => {
    
       axios.get(`https://fakestoreapi.com/products`)
       .then((res)=>{
        console.log(res.data)
        setData(res.data)
    
    
       }).catch((err)=>{
        console.log("error from axios" ,err)
       })
    
        
      }, [])
  






  return (

    <>

     <div className='mt-16'>
      < DrawerAppBar />
      <BasicModal open={open}  singleProduct ={singleProduct}  handleClose ={()=>setOpen(false)}/>

      <div className='flex flex-wrap justify-around'>

      {  data.map((item,i)=>{
        return <ImgMediaCard   setOpen ={setOpen}   viewDetais={viewDetais} product={item}  key={i}  />
      })}
      </div>


      
     </div>
    
    </>
    
  )
}

export default Home