import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import ExploreSingleProduct from './components/ExploreSingleProduct/ExploreSingleProduct';
import Home from './components/Home/Home/Home';
import SinglePuchaseNow from './components/Home/SinglePuchaseNow/SinglePuchaseNow';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
                <Home></Home>
            </Route>

            <Route path="/home">
                <Home></Home>
            </Route>

            <PrivateRoute path="/homeproducts/:homeproductsId">
                <SinglePuchaseNow></SinglePuchaseNow>
            </PrivateRoute>

            <Route path="/explore">
                <Explore></Explore>
            </Route>

            <PrivateRoute path="/exploresingleproduct/:exploresingleproductId">
                <ExploreSingleProduct></ExploreSingleProduct>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
                <Login></Login>
            </Route>

            <Route path="/register">
                <Register></Register>
            </Route>

            <Route path="*">
                <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
