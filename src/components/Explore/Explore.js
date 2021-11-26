import { Typography } from '@mui/material'
import React from 'react'
import ExploreHeader from '../ExploreHeader/ExploreHeader'
import ExploreService from '../ExploreService/ExploreService'
import Footer from '../Footer/Footer'
import Navbar from '../Shared/Navbar/Navbar'

const Explore = () => {
     return (
          <div>
               <Navbar></Navbar>
               <ExploreHeader></ExploreHeader>
               
               <div className="exploreBgColoH">
               <Typography sx={{ color: 'info.main'}} variant="h4" gutterBottom component="div"> Explore Your Service </Typography>
                    <ExploreService></ExploreService>
               </div>
               <Footer></Footer>
          </div>
     )
}

export default Explore