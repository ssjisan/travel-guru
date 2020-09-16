import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Cover from './Components/Cover/Cover';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Cover></Cover>
          </Route>
          <Route path="/home">
            <Cover></Cover>
          </Route>
          <Route path="/signIn">
            <Login></Login>
          </Route>
          <Route path="/destination">
            <Booking></Booking>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
