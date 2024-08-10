import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import AlignItemsList from './Cartlist';
import { MdDelete } from "react-icons/md";


export default function TemporaryDrawer({cart,open,setOpen,deleteCart,updateQty}) {

  
  

  console.log(cart,"me to right drwer me hu")

  return (
    <div>
      
      <Drawer open={open} anchor='right'  onClose={()=>setOpen(false)}>
        
        <AlignItemsList  deleteCart={deleteCart}  updateQty ={updateQty} cart= {cart} /> 
      </Drawer>
    </div>
  );
}
