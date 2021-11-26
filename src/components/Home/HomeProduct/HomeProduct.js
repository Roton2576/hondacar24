import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import HomeProductSingle from '../HomeProductSingle/HomeProductSingle';
import './HomeProduct.css'

const HomeProduct = () => {
     const [homeProduct, setHomeProduct] = useState([]);

     useEffect(() => {
          fetch('https://agile-oasis-71318.herokuapp.com/homeproducts')
          .then(res => res.json())
          .then(data => setHomeProduct(data.slice(0, 6)))
     },[]);

     return (
          <div className="homeProductBg">
               <Container>

                    <Typography sx={{ mb: 5, color: '#BB2D3B', pt: 8 }} variant="h4" gutterBottom component="div">
                         SHOP BY BODY STYLE
                    </Typography>
                    { homeProduct.length === 0 ? 
                    <div className="spinner-border mx-auto" role="status">
                         <span>Looding</span>
                         <span className="visually-hidden">Loading...</span>
                    </div>
                    : 
                    <Grid container spacing={2}>
                         {
                              homeProduct.map(homeProduc => <HomeProductSingle
                                   key={ homeProduc._id }
                                   homeProduc={ homeProduc }
                              ></HomeProductSingle>)
                         }
                    </Grid>}

               </Container>
          </div>
     )
}

export default HomeProduct
