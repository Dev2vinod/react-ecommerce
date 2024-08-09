
import  React,{useContext,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CartContext from '../context/Context';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';



 import'./drawer.css'
 // star icon or image jo bhi

 import ReactStars from 'react-stars'
 

  

export default function ImgMediaCard({product,viewDetais,setOpen}) {

  const [cartOpen, setCartOpen] = useState(false);


  

  


  const viewDetailCard =(id)=>{
    console.log("hello")
    viewDetais(id)
    setOpen(true)
  }
  const{cart,setCart} =useContext(CartContext);

  const addToCard =(id)=>{

    const cartData =JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push({...product,qty:1})
    localStorage.setItem("cart",JSON.stringify(cartData))
    // console.log(cart,"cart",id)
    setCart(cartData)
    setCartOpen(true)
    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      // console.log("click way kr to diya")
      setCartOpen(false);
      return;
    }

  };


 



    
  return (

    <>
      <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar open={cartOpen} autoHideDuration={2000} onClose={handleClose}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }	}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Item is added success!
        </Alert>
      </Snackbar>
    </div>
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
        <Button size="small" color='success' disableFocusRipple	={true} style={{padding:'5px 12px',backgroundColor:'#8bc34a',color:'white'}} 
          onClick={()=>addToCard(product.id)}   
        
        >Add To Cart</Button>

 

        <Button size="small" color='success'  variant="outlined"  onClick={()=>viewDetailCard(product.id)}>View Detail</Button>
      </CardActions>
    </Card>
    </>

  );
}
