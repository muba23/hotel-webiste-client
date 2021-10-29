import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Homepage/Header/Header';
import Home from './Pages/Homepage/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Pages/Homepage/Banner/Banner';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch> 
            <Route exact path="/">
                <Home></Home>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
