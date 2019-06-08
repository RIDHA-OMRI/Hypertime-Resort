import React from 'react';
import logo from '../src/images/logo.svg';
import './App.css';
import Home from "../src/pages/Home";
import Rooms from "../src/pages/Rooms";
import SingleRoom from "../src/pages/SingleRoom";
import Error from "../src/pages/Error";
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/Rooms/" component={Rooms} />
        <Route exact path="/Rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      </>
    
  );
}

export default App;
