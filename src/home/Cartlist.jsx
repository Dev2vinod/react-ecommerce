import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { MdDelete } from "react-icons/md";
import { CiSquarePlus,CiSquareMinus  } from "react-icons/ci";
import Alert from '@mui/material/Alert';


import Typography from '@mui/material/Typography';

export default function AlignItemsList({cart,deleteCart,updateQty}) {

   
// console.log(cart,"me to list item mme a gya")
  return (

    <div>

      { cart.length >0 ? cart.map((item,index)=>{


            return <div key={index}>
              

              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        
        <img src={item.image} alt="product image" className='w-[70px] h-[70px] object-contain p-1 m-1'  />
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="h4"
                variant="body2"
                color="text.primary"
              >
              Rs {(item.price)*(item.qty)}/- 
              </Typography> <br />
            
             <div className='flex items-center justify-between'>
                
              <div className='flex  p-1 mx-3'>
                Qty
             <span><CiSquarePlus color='green' size={22} onClick={()=>updateQty('+',item.id)} /></span>
              {item.qty}
             <span><CiSquareMinus color='blue' size={22}  onClick={()=> item.qty >1 && updateQty('-',item.id)} /></span>

              </div>

              <div>
               <MdDelete  color='red' size={25} onClick={()=>deleteCart(item.id)} />

                </div>

             </div>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />


      
    </List>
              
               </div>

      }):null
       }

      {cart.length >0 ? <div> <Button className='w-full mt-8 pt-3 bg-[#8bc34a] ' color="success" variant="contained">Check Out</Button>

      </div>: 
            <Alert variant="filled" severity="error"  className='mt-4 m-1'>
            Your cart Is Empty.
          </Alert>
      }
      

      
        

    
   

    </div>

  );
}
