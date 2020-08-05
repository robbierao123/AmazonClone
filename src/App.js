import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Cart from './component/Cart'
import Login from './component/Login'

import Home from './component/Home'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      

<Router>


        <Switch>

          <Route exact path="/">
          <Navbar/>

          <Home />
      

          </Route>

          <Route exact path="/Banner">
          <Navbar/>
            <Banner />
          </Route>

          <Route path="/Cart">
          <Navbar/>
            <Cart />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
 
    </Router>
        
    
    )
  }
}

export default App
