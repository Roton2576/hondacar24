import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const HomeProductModal = ({ openPurchase, handlePurchaseClose, homeProduc }) => {
     const { img, name, kiloMiter, price } = homeProduc;
     const { user } = useAuth();

     const initialInfo = { displayName: user.displayName, email: user.email, phone: '' }
     const [ orderInfo, setOrderInfo ] = useState(initialInfo);

     const handleOnBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newInfo = {...orderInfo};
          newInfo[field] = value;
          setOrderInfo(newInfo);
     }

     const handlePurchaseSubmit = (e) => {
          
          //collect data 
          const carOrder = {
               ...orderInfo,
               img: img,
               serviceName: name,
               runner: kiloMiter,
               price: price
          }
          console.log(carOrder);
          //send data to server
          fetch('https://agile-oasis-71318.herokuapp.com/order', {
               method: 'POST',
               headers: {
                    'content-type':'application/json'
               },
               body: JSON.stringify(carOrder)
          })
          .then(res => res.json())
          .then(data => {
               if(data.insertedId) {
                    alert('Order Successfully');
                    handlePurchaseClose();
               }
          })
          e.preventDefault();
     }

     return (
          <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               open={openPurchase}
               onClose={handlePurchaseClose}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                    timeout: 500,
               }}
               >
               <Fade in={openPurchase}>
                    <Box sx={style}>
                    <Typography sx={{ textAlign: "center", mb: 2 }} id="transition-modal-title" variant="h6" component="h2">
                         { name }
                    </Typography>
                         <form onSubmit={ handlePurchaseSubmit }>
                              <TextField 
                                   sx={{ width: "100%", my: 1 }}
                                   id="outline-size-small"
                                   onBlur={ handleOnBlur }
                                   name="displayName"
                                   defaultValue={ user.displayName }
                                   size="small"
                              />
                              <TextField 
                                   sx={{ width: "100%", my: 1 }}
                                   id="outline-size-small"
                                   onBlur={ handleOnBlur }
                                   name="email"
                                   defaultValue={ user.email }
                                   size="small"
                              />
                              <TextField 
                                   sx={{ width: "100%", my: 1 }}
                                   id="outline-size-small"
                                   onBlur={ handleOnBlur }
                                   name="phone"
                                   defaultValue="Enter Your Phone Number"
                                   size="small"
                              />
                              <TextField 
                                   disabled
                                   label="Car Image URL"
                                   sx={{ width: "100%", my: 1 }}
                                   id="outline-size-small"
                                   defaultValue={ img }
                                   size="small"
                              />
               
                              <TextField 
                                   disabled
                                   label="Kilomiter"
                                   sx={{ width: "100%", my: 1 }}
                                   id="outline-size-small"
                                   defaultValue={ kiloMiter }
                                   size="small"
                              />
                              <TextField 
                                   disabled
                                   label="Price"
                                   sx={{ width: "100%", my: 1 }}
                                   id="outline-size-small"
                                   defaultValue= { price }
                                   size="small"
                              />
                              <Typography sx={{ textAlign: "center", my: 2 }} id="transition-modal-title" variant="h6" component="h2">
                                   <Button type="submit" variant="contained">Order Submit</Button>
                              </Typography>
                              
                         </form>
                    </Box>
               </Fade>
          </Modal>
     )
}

export default HomeProductModal
