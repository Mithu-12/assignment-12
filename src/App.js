import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Ragister/Register';
import Products from './Pages/Products/Products';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddToCart from './Pages/AddToCart/AddToCart';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orderlist from './Pages/Orderlist/Orderlist';
import Explore from './Pages/Explore/Explore';
import ReviewHome from './Pages/ReviewHome/ReviewHome';
import Footer from './Pages/Footer/Footer';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import NotFound from './Pages/NotFound/NotFound';
import Offer from './Pages/Offer/Offer';
import UpdateProduct from './Pages/UpdataProduct/UpdateProduct';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
          <Route path="/about">
           <About></About>
          </Route>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <PrivateRoute exact path="/placeOrder/:id">
          <AddToCart></AddToCart>
          </PrivateRoute>
          <PrivateRoute  path="/updateProduct/:id">
          <UpdateProduct></UpdateProduct>
          </PrivateRoute>
          <PrivateRoute exact path="/addProduct">
          <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/orderlist">
          <Orderlist></Orderlist>
          </PrivateRoute>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/products">
          <Products></Products>
          </Route>
          <Route path="/explore">
          <Explore></Explore>
          </Route>
          <Route path="/reviewHome">
          <ReviewHome></ReviewHome>
          </Route>
          <Route exact path="/">
            <Home />
            </Route>
            <Route exact  path="/offer">
            <Offer></Offer>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
