import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link,
     useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Payment from '../Payment/Payment';
import useAuth from '../../../hooks/useAuth';
import Home from '../../Home/Home/Home';
import AddOrder from '../AddOrder/AddOrder';
import ReviewUser from '../ReviewUser/ReviewUser';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 260;
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, user, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="ps-4 text-start">
      <Toolbar />

      <div className="text-center">
        <img className="rounded-circle mb-3" src={user.photoURL} alt="" /> <br />
        <h6 className="mx-auto"> { user.displayName } </h6>
        <p className="fw-bold"> { user.email } </p>
      </div>

      <Divider />

          <Link to={`${url}`} style={{ textDecoration: 'none', color: 'black'}} >
               <Button color="inherit" sx={{my: 1}} > <i className="fas fa-biking pe-3 text-primary"></i> My Orders </Button>
          </Link> <br />

          <Link to={`${url}/review`} style={{ textDecoration: 'none', color: 'black'}}>
               <Button color="inherit" sx={{my: 1}}> <i className="fas fa-file-pdf pe-4"></i> Review </Button>
          </Link> <br />

          <Link to={`${url}/payment`} style={{ textDecoration: 'none', color: 'black'}} >
               <Button color="inherit" sx={{my: 1}}> <i className="fab fa-paypal pe-4"></i> Pay </Button>
          </Link> <br />

          <Divider />

          { admin && <Link to={`${url}/addOrder`} style={{ textDecoration: 'none', color: 'black'}} >
               <Button color="inherit" sx={{mt: 3}} > <i className="fas fa-folder-plus pe-4 text-danger"></i> Add Product </Button>
          </Link>} <br />

          { admin && <Link to={`${url}/manageallorder`} style={{ textDecoration: 'none', color: 'black'}}>
               <Button color="inherit" sx={{my: 1}}> <i className="fas fa-tasks pe-4 text-danger"></i> Manage All Order </Button>
          </Link>} <br />

          { admin && <Link to={`${url}/manageaproduct`} style={{ textDecoration: 'none', color: 'black'}}>
               <Button color="inherit" sx={{my: 1}}> <i className="fab fa-product-hunt pe-4 text-danger"></i> Manage Product </Button>
          </Link>} <br />

          { admin && <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: 'black'}} >
               <Button color="inherit" sx={{mb: 4}} > <i className="fas fa-user-shield pe-4 text-danger"></i> Make Admin </Button>
          </Link>
          
          } <br />

          <Divider />

          <Link to={`${url}/home`} style={{ textDecoration: 'none', color: 'black'}} >
               <Button color="inherit" sx={{mt: 1}}> <i className="fas fa-home pe-4 text-success"></i> Home </Button>
          </Link> <br />

          <Button onClick={ logOut } color="inherit" sx={{mb: 1}}> <i className="fas fa-sign-out-alt pe-4 text-success"></i> Log Out </Button>
          
          <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Manage All Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
     
        <Switch>

          <Route exact path={path}>
               <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/addOrder`}>
               <AddOrder></AddOrder>
          </Route>
          <Route path={`${path}/review`}>
               <ReviewUser></ReviewUser>
          </Route>
          <Route path={`${path}/manageallorder`}>
               <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path={`${path}/manageaproduct`}>
               <ManageProduct></ManageProduct>
          </Route>
          <Route path={`${path}/makeAdmin`}>
               <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/payment/:orderId`}>
               <Payment></Payment>
          </Route>     
          <Route path={`${path}/home`}>
               <Home></Home>
          </Route>     

      </Switch>

      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
