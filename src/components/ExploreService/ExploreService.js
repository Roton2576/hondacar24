import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExploreServiceDetails from '../ExploreServiceDetails/ExploreServiceDetails';

const ExploreService = () => {
     const [services, setServices] = useState([]);

     useEffect(() => {
          fetch('https://agile-oasis-71318.herokuapp.com/homeproducts')
          .then(res => res.json())
          .then(data => setServices(data))
     },[]);

     return (
          <Container>
               { services.length === 0 ? 
               <div className="spinner-border mx-auto" role="status">
                    <span>Looding</span>
                    <span className="visually-hidden">Loading...</span>
               </div>
               : 
               <Grid container spacing={2}>
                    
                    {
                         services.map(service => <ExploreServiceDetails
                              key= { service._id }
                              service= { service }
                         ></ExploreServiceDetails>)
                    }
               </Grid>}
          </Container>
     )
}

export default ExploreService
