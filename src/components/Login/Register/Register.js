import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Footer from '../../Footer/Footer'
import Navbar from '../../Shared/Navbar/Navbar'

const Register = () => {
     const [ loginData, setLoginData ] = useState({});
     const history = useHistory();

     const { authError, user, registerUser, isLoading } = useAuth();

     const handleOnBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }

     const handleLoginSubmit = (e) => {
          if(loginData.password !== loginData.password2) {
               alert('Your Password not match');
               return
          }
          registerUser(loginData.email, loginData.password, loginData.name, history);
          e.preventDefault();
     }

     return (
          <>
               <Navbar></Navbar>
               <div className="my-5 pb-4 w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
               <Container>
                    <Typography sx={{mt: 8}} variant="h4" gutterBottom> Registation Hare! </Typography>
                         { !isLoading && <form onSubmit={ handleLoginSubmit }>
                              <TextField 
                                   sx={{ width: '57%', mb: 4 }}
                                   id="standard-basic" 
                                   name="name"
                                   onBlur={ handleOnBlur }
                                   label="Write Your Name" 
                                   type="text"
                                   variant="standard" 
                              />
                              <TextField 
                                   sx={{ width: '57%', mb: 4 }}
                                   id="standard-basic" 
                                   name="email"
                                   onBlur={ handleOnBlur }
                                   label="Enter Your Email" 
                                   type="email"
                                   variant="standard" 
                              />
                              <TextField 
                                   sx={{ width: '57%', mb: 4 }}
                                   id="standard-basic" 
                                   name="password"
                                   onBlur={ handleOnBlur }
                                   label="Enter Your Password"
                                   type="password" 
                                   variant="standard" 
                              />
                              <TextField 
                                   sx={{ width: '57%', mb: 6 }}
                                   id="standard-basic" 
                                   name="password2"
                                   onBlur={ handleOnBlur }
                                   label="Re-Type Your Password"
                                   type="password" 
                                   variant="standard" 
                              />
                              
                              <Button sx={{ width: '57%', fontSize: '20px' }} variant="contained" type="submit"> Register ! </Button>
                              <NavLink to="/login">
                                   <Button sx={{ width: '57%', fontSize: '18px', mt: 3 }} variant="text"> All Ready Registered? &nbsp; Please Login Hare ! </Button>
                              </NavLink>
                         </form>}
                         { isLoading && <CircularProgress /> }
                         { user?.email && <Alert severity="success"> Registation is Successfull </Alert> }
                         { authError && <Alert severity="error"> {authError} </Alert> }
               </Container>
               </div>
               <Footer></Footer>
          </>
     )
}

export default Register
