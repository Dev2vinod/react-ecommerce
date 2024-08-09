



import  React ,{useState,useEffect,useContext}from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Badge from '@mui/material/Badge';



import { MdShoppingCart  } from "react-icons/md";





import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImgMediaCard from './ImgMediaCard';
import "./drawer.css";
import { useSearchParams } from "react-router-dom";
import TemporaryDrawer from './RightDrawer'

import CartContext from '../context/Context';
  

const drawerWidth = 240;
const navItems = ['All', 'Electronics', 'Jewellery','Womens Clothing'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [cart, setCart] = useState(0);
  const{cart,setCart} =useContext(CartContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        GHOUS STORE 


      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  useEffect(() => {
    const cartData =JSON.parse(localStorage.getItem("cart"))||[]

    console.log("cart",cartData,cartData.length)
    setCart(cartData.length)
  }, [])
  
    
 
  console.log(cart,"aya kya cart me kucjh")

  
  const[open,setOpen] =useState(false)
  // const [drawOpen,setDrawOpen] =useState(false)

  return (

    <>
    <Box sx={{ display: 'flex' ,paddingBottom:'12'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{paddingBlockEnd:'12',backgroundColor:'#8bc34a'}}>
        <Toolbar>
          <IconButton
            color="green"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <span >
           GHOUS STORE
            </span> 


            
                   



          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button   key={item} sx={{ color: 'white' }}>
                {item}
                


                
              </Button>
            ))}
            <span className='cursor-pointer'  onClick={()=>setOpen(true)} >

            <Badge badgeContent={cart.length} color="secondary">
              <MdShoppingCart color="action"    />
              <TemporaryDrawer cart={cart}  open={open} setOpen={setOpen}  />

            </Badge>
            </span>


            


          </Box>
        </Toolbar>
      </AppBar>
      <nav  >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>


    </Box>
    </>

  );
}

DrawerAppBar.propTypes = {
  
  window: PropTypes.func,
};

export default DrawerAppBar;
