import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars'
import Button from '@mui/material/Button';


import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';

// export default function SizesChips() {
//   return (
//     <Stack direction="row" spacing={1}>
//       <Chip label="Small" size="small" />
//       <Chip label="Small" size="small" variant="outlined" />
//     </Stack>
//   );
// }

export default function MediaControlCard({singleProduct}) {
  const theme = useTheme();

  

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>

      <img src={singleProduct.image} alt="single product"
       className='w-[200px] p-1 m-1' />


        {/* <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {singleProduct.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {singleProduct.description}
          </Typography> */}

          <div>
            <h1 className='font-semibold text-xl p-1 mt-2'>
            {singleProduct.title}

            </h1>

            <span className='p-1 text-left'>
            {singleProduct.description}
              
            </span>
            <br />
            <span><Chip label={singleProduct.category} size="small" /></span>
          <br />

          <h1 className='m-2 text-xl font-bold'> Price {singleProduct.price}/- </h1>
            <ReactStars
           count={5}
            //  onChange={ratingChanged}
            value={singleProduct?.rating?.rate}
            edit={false}
                size={24}
               color2={'#ffd700'} />
        <button size="small"    className='bg-[#8bc34a] p-1 px-7 rounded text-white mx-3 mb' >Buy Now</button>

        <Button variant="outlined" color="success"  className='mb-3'>
          Add to card
        </Button>
        {/* </CardContent> */}
          </div>


        
      </Box>
     
    </Card>
  );
}
