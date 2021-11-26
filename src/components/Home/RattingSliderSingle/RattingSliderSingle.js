import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Rating from 'react-rating';
import './RattingSliderSingle.css'

const RattingSliderSingle = ({ rating }) => {
     const { img, name, price, describe } = rating;

     return (
          <Grid item xs={12} sm={6} md={4} sx={{mb: 7, mt: 2}}>

               <Paper elevation={3} sx={{py: 3}}>

                    <Typography variant="h3" gutterBottom component="div">
                         <img src={ img } className="img-fluid rounded-circle rattingImag" alt="" />
                    </Typography>

                    <Typography variant="h5" gutterBottom component="div">
                         { name }
                    </Typography>

                    <Typography variant="body1" gutterBottom component="div">
                              <Rating
                                   className="text-warning"
                                   initialRating={price}
                                   emptySymbol="fa fa-star-o fa-2x"
                                   fullSymbol="fa fa-star fa-2x"
                              />
                    </Typography>

                    <Typography variant="body1" gutterBottom component="div">
                         { describe.slice(0, 80) }
                    </Typography>

               </Paper>

          </Grid>
     )
}

export default RattingSliderSingle
