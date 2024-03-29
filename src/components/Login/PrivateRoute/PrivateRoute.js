import { CircularProgress } from '@mui/material';
import React from 'react'
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
     const { user, isLoading } = useAuth();
     if(isLoading) { return <CircularProgress/> }
     
     return (
          <div>
               <Route
                    {...rest}
                    render = {({ location }) => user.email ? 
                    children : 
                    <Redirect
                         to={{
                              pathname: "/login",
                              state: { from: location }
                         }}
                    ></Redirect>}
               ></Route>
          </div>
     )
}

export default PrivateRoute
