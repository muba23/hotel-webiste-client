import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Homepage/Header/Header';
import Home from './Pages/Homepage/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Homepage/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services';
import NotFound from './Pages/Homepage/NotFound/NotFound';
import Booking from './Pages/Booking/Booking'
import SpecialOffers from './Pages/SpecialOffers/SpecialOffers';
import AddService from './Pages/AddService/AddService';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
        <Switch> 
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/register">
                <Register></Register>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/contact">
                <Contact></Contact>
            </Route>
            <Route path="/services">
                <Services></Services>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
                <Booking></Booking>
            </PrivateRoute>
            <Route path="/addService">
                <AddService></AddService>
            </Route>
            <Route path="/manageServices">
                <ManageServices></ManageServices>
            </Route>
            
            <Route path="*">
                <NotFound></NotFound>
            </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
