//import React from 'react';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import router from './router.js';
class App extends Component {
  
  render() {

    return (
      <Router>
       
      <Route path="/" component={router }/>
      
      
    </Router>
    );
  }
  
}

export default App;