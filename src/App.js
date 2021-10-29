import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Homepage/Header/Header';
import Home from './Pages/Homepage/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Pages/Homepage/Banner/Banner';
import Footer from './Pages/Homepage/Footer/Footer';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';



function App() {
  return (
    <div className="App">
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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
