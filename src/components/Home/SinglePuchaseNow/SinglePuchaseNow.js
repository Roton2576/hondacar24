import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Footer from '../../Footer/Footer'
import PurchaseModal from '../../PurchaseModal/PurchaseModal'
import Navbar from '../../Shared/Navbar/Navbar'
import './SinglePuchaseNow.css'

const SinglePuchaseNow = () => {
     const { homeproductsId } = useParams();
     const [ service, setService ] = useState({});

     const [openPurchase, setOpenPurchase] = React.useState(false);
     const handlePurchaseOpen = () => setOpenPurchase(true);
     const handlePurchaseClose = () => setOpenPurchase(false);

     useEffect(() => {
          fetch(`https://agile-oasis-71318.herokuapp.com/homeproducts/${homeproductsId}`)
          .then(res => res.json())
          .then(data => setService(data))
     },[]);

     return (
          <div>
               <Navbar></Navbar>
               <div className="container mt-4 shadow-lg p-3 mb-5 bg-white rounded">
                    <div>
                    <img src={ service.img } className="img-fluid buyNowImg mt-5 img-thumbnail" alt="" />
                         <h2 className="mt-4"> { service.name } </h2>
                         <p className="w-50 mx-auto"> { service.describe } </p>
                         <h6> K.M { service.kiloMiter } </h6>
                         <h5> Price: ${ service.price } </h5>
                         <Button onClick={ handlePurchaseOpen } variant="contained" sx={{px: 10, py: 1, mt: 4, mb: 8, fontSize: '22px'}}> Purchase Now </Button>
                    </div>
                         <PurchaseModal
                              service={ service }
                              openPurchase={ openPurchase }
                              handlePurchaseClose={ handlePurchaseClose }
                         ></PurchaseModal>
               </div>
               <Footer></Footer>
          </div>
     )
}

export default SinglePuchaseNow
