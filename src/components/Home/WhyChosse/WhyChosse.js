import { Button } from '@mui/material'
import React from 'react'

const WhyChosse = () => {
     return (
          <div className="container-fluid py-5">
               <h1>We Provide Best Services</h1>
               <p>There are many variations of passages of Lorem Ipsum typesetting industry has been the <br /> industry's standard dummy text ever since the been when an unknown printer.</p>
               <div className="row container d-flex justify-content-around align-items-center mx-auto mt-5">
 
                    <div className="col-md-3 shadow p-3 mb-5 bg-white rounded p-5">
                         <h1> <i className="fab fa-servicestack bg-warning text-white p-4 rounded-circle"></i> </h1>
                         <h3>Estimates</h3>
                         <p>We bring you the most accurate and fair-price service estimates</p>
                         <Button variant="contained" sx={{backgroundColor: 'red', mt: 2}}> Read More </Button>
                    </div>

                    <div className="col-md-3 shadow p-3 mb-5 bg-white rounded p-5">
                         <h1> <i className="fab fa-rust bg-warning text-white p-4 rounded-circle"></i> </h1>
                         <h3>Trusted</h3>
                         <p>Trusted Service Centers are certified for high quality</p>
                         <Button variant="contained" sx={{backgroundColor: 'red', mt: 2}}> Read More </Button>
                    </div>

                    <div className="col-md-3 shadow p-3 mb-5 bg-white rounded p-5">
                         <h1> <i className="fas fa-warehouse bg-warning text-white p-4 rounded-circle"></i> </h1>
                         <h3>Guarantees</h3>
                         <p>Covers parts and labor on qualifying repairs and services for 24 months/24,000 miles</p>
                         <Button variant="contained" sx={{backgroundColor: 'red', mt: 2}}> Read More </Button>
                    </div>

               </div>
          </div>
     )
}

export default WhyChosse
