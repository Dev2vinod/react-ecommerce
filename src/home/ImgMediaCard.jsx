
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 import'./drawer.css'
 // star icon or image jo bhi

 import ReactStars from 'react-stars'
 
//  import { render } from 'react-dom'

const ratingChanged = (newRating) => {
  console.log(newRating)
}
  

export default function ImgMediaCard({product,viewDetais}) {
  return (


    <Card sx={{ maxWidth: 250 ,marginTop:4 ,position:'relative',paddingBottom:2}}>
      <div>

        <img src={product.image} 
        style={{width:"100%",height:240,objectFit:"contain"}}
        
        alt="" />
        
        </div>
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Price :Rs {product.price}/-
        </Typography>
        <Typography variant="span" color="text.secondary">
          Title : {product.title}
        </Typography>
        <ReactStars
           count={5}
            //  onChange={ratingChanged}
            value={product.rating.rate}
            edit={false}
                size={24}
               color2={'#ffd700'} />,
      </CardContent>
      <CardActions className='absolute bottom-0 font-medium text-[12px]'>
        <Button size="small" color='success' disableFocusRipple	={true} style={{padding:'5px 12px',backgroundColor:'#8bc34a',color:'white'}} >Add To Cart</Button>

        <Button size="small" color='success'  variant="outlined"  onClick={()=>viewDetais(product.id)}>View Detail</Button>
      </CardActions>
    </Card>
  );
}
