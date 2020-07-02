import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from "./store";


function address ({match}) {

  
    console.log("Store changed ",store.getState())
  
   console.log(match.params)

        return (
        <h1>
          {
            store.getState()[match.params.bp].description
          }

          </h1>


        )
        


}
export default address;