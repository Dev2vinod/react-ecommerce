import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

export default function AlignItemsList({cart}) {

   
console.log(cart,"me to list item mme a gya")
  return (

    <div>

      { cart.length >0 ? cart.map((item,index)=>{


            return <div>
              

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
              Rs {item.price}/- 
              </Typography> <br />
             Qty {item.qty}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
     
    </List>
              
               </div>

      }):<h2> loading ho rha hai</h2> }
    
   

    </div>

  );
}
