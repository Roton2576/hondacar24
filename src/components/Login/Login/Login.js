import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar'

const Login = () => {
     const [ loginData, setLoginData ] = useState({});
     const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
     const location = useLocation();
     const history = useHistory();

     const handleOnBlur = (e) => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = {...loginData}
          newLoginData[field] = value;
          setLoginData(newLoginData);
     }

     const handleLoginSubmit = (e) => {
          loginUser(loginData.email, loginData.password, location, history);
          e.preventDefault();
     }

     const handleGoogleSignIn = () => {
          signInWithGoogle(location, history)
     }

     return (
          <>
               <Navbar></Navbar>
               <div className="my-5 pb-4 w-50 mx-auto shadow-lg p-3 mb-5 bg-white rounded">
               <Container sx={{py: 4}}>
                    <Typography sx={{mt: 8}} variant="h4" gutterBottom> Login Hare! </Typography>
                         <form onSubmit={ handleLoginSubmit }>
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
                                   sx={{ width: '57%', mb: 6 }}
                                   id="standard-basic" 
                                   name="password"
                                   onBlur={ handleOnBlur }
                                   label="Enter Your Password"
                                   type="password" 
                                   variant="standard" 
                              />
                              
                              <Button sx={{ width: '57%', fontSize: '20px' }} variant="contained" type="submit"> Login ! </Button>
                              <NavLink to="/register">
                                   <Button sx={{ width: '57%', fontSize: '18px', mt: 3 }} variant="text"> New User? &nbsp; Please Registation Now </Button>
                              </NavLink>
                         </form>
                         
                         <Button onClick={handleGoogleSignIn} sx={{mt: 2, fontSize: '20px'}} variant="contained"> <i className="fab fa-google-plus-g fs-2 pe-2"></i> SignIn With Google </Button>
                              <br />
                         { isLoading && <CircularProgress /> }
                         { user?.email && <Alert severity="success"> Login Successfull </Alert> }
                         { authError && <Alert severity="error"> {authError} </Alert> }
               </Container>
               </div>
               <Footer></Footer>
          </>
     )
}

export default Login
