import React, { createContext, useState } from 'react';
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
import Hotel from './Components/Hotel/Hotel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>  
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
            <Route path="/destination/:placeId">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/hotel/:placeId">
              <Hotel></Hotel>
            </PrivateRoute> 
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>  
    </div>
  );
}

export default App;
