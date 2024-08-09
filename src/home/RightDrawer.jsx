import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import AlignItemsList from './Cartlist'

export default function TemporaryDrawer({cart,open,setOpen}) {

  
  

  console.log(cart,"me to right drwer me hu")

  return (
    <div>
      
      <Drawer open={open} anchor='right'  onClose={()=>setOpen(false)}>
        
        <AlignItemsList  cart= {cart} /> 
      </Drawer>
    </div>
  );
}
