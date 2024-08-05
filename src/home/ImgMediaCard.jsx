import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({title,image,price,id,rating,category}) {
  return (

    <div>

    <div >

    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ `image`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         Title: {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         category : {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Price : Rs {price}/-
        </Typography>

        <h2> Rate :
          {rating.rate}
        </h2>
        

      </CardContent>
      <CardActions>
        <Button size="small">Add to Card</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    </div>


    </div>
  );
}
