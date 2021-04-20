import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddReview from "./components/AddReview/AddReview";
import AddService from "./components/Admin/AddService/AddService";
import Admin from "./components/Admin/Admin/Admin";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Login from "./components/Login/Login";
import ManageService from "./components/Admin/ManageService/ManageService";
import CheckOut from "./components/Home/CheckOut/CheckOut";
import TripList from "./components/Admin/TripList/TripList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from "./components/Home/About/About";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/service/:serviceId">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/tripList">
            <TripList></TripList>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
