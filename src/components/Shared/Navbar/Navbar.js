import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'


const Navbar = () => {
     const { user, logOut } = useAuth();

     return (
          <Box sx={{ flexGrow: 2 }} style={{position: 'sticky', top: '0'}} >
               <AppBar position="static">
               <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                         H O N D A 24.car
                    </Typography>
                    <Link to="/home">
                         <Button sx={{color: 'white'}} color="inherit">Home</Button>
                    </Link>
                    <Link to="/explore">
                         <Button sx={{color: 'white'}} color="inherit">Explore</Button>
                    </Link>

                    { user?.email ? 
                         <Box>
                              <Link to="/dashboard">
                                   <Button sx={{color: 'white'}} color="inherit">Dashboard</Button>
                              </Link>
                              { user?.email && <Button variant="text" sx={{color: 'white', textTransform: 'lowercase' }}> <img src={user.photoURL} alt="" className="rounded-circle imgSizeNab" /> {user.displayName} </Button> }
                              <Button onClick={logOut} sx={{color: 'white'}} color="inherit">Log Out</Button>
                         </Box>
                         : 
                         <Link to="/login">
                              <Button sx={{color: 'white'}} color="inherit">Login</Button>
                         </Link>}
               </Toolbar>
               </AppBar>
          </Box>
     )
}

export default Navbar
