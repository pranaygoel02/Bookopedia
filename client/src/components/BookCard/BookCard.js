import React from 'react'
import { Link } from 'react-router-dom'
import BookImage from './BookImage'
import BookTitle from './BookTitle'
import './BookCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import SendIcon from '@mui/icons-material/IosShareRounded'
import Star from './Star';
import Price from './Price'

export default function BookCard({book}) {
    console.log(book)
    return (
    <Card className='card'>
      <CardMedia
        component="img"
        alt="green iguana"
        image = {book.image}
        className='bookImage'
      />
      <div>
      <CardContent className='overflow-auto'>
        <Typography gutterBottom variant="h5" className='title' component="div">
          {book.title}<br></br><span className='author'>- by {book.authors}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.subtitle}
        </Typography>
      </CardContent>
      <div className='flex' style={{"justify-content":"space-between"}}>
        {book.rating > 0 && <Star rating = {book.rating}/>}
        <Price price={book.price}/>
      </div>
      <div className='flex'>
      <CardActions className='flex'>
        <Link to={`/book`}><Button size="small" disableElevation disableRipple variant='contained' endIcon={<ReadMoreIcon/>}>See More</Button></Link>
        {"pdf" in book && <Button size="small" variant='outlined'>PDF Available</Button>}
      </CardActions>
        <Button size="small"><SendIcon/></Button>
        </div>
      </div>
    </Card>
  );
}


// export default function BookCard({book}) {
//     console.log(book);
//   return (
//     <div className='card'>
//         <BookImage image = {book.image}/>
//         <BookTitle title = {book.title}/>
//     </div>
//   )
// }
