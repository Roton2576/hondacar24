import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const HomeProductSingle = ({ homeProduc }) => {
     const { _id, img, name, kiloMiter, price, describe } = homeProduc;

     return (
          <>
          <Grid item xs={12} sm={6} md={4}>
               <Paper elevation={3} sx={{py: 3}}>

                    <Typography variant="h3" gutterBottom component="div">
                              <img style={{height: '280px'}} src={ img } className="img-fluid" alt="" />
                    </Typography>
                    <Typography sx={{color: 'info.main', fontWeight: 600}} variant="h5" gutterBottom component="div">
                              { name }
                    </Typography>
                    <Typography variant="body1" gutterBottom component="div">
                              { describe.slice(0, 110) }
                    </Typography>
                    <Typography variant="body1" sx={{fontWeight: 600}} gutterBottom component="div">
                              K.M - { kiloMiter }
                    </Typography>
                    <Typography variant="h6" sx={{mb: 2}} gutterBottom component="div">
                              Price: ${ price }
                    </Typography>
                    <Link to={`/homeproducts/${_id}`} >
                         <Button variant="contained" sx={{px: 8}}> Purchase Now </Button>
                    </Link>

               </Paper>
          </Grid>
          </>
     )
}

export default HomeProductSingle
