import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import home from './home.js';
import address from './adress.js';
import cart from './cart';
class router extends Component {
  
    
    
  
    render() {

        return (
            
            <Router>
              <Switch>
                
                <Route path="/cart" component={cart}/>
                <Route path="/:bp" component={address}/>

                <Route path="/"    component={home}/>
                </Switch>
          
            </Router>
          );



    }

}
export default router;