import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import cstore from "./cart/cartStore";
import './home.css'

function cart(){
    console.log(8888)
    console.log(cstore.getState())


return(
    <div className="App">
<h1>{cstore.getState().prod.length}</h1>
<div className="Products">
        {cstore.getState().prod.map((todo) => {return(
          
          
            <div className="Item">
             
            <img src =  {todo.url}  alt = {todo.name} className="Img" />
           
              <h5 className="card-title">{todo.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.price}
              </h6>
              <button
            
            
            onClick={() =>
              cstore.dispatch({
                type: "DEL",
                payload: {
                  id: todo.id,
                },
              })
            }
          >
            delete
          </button>
            
            </div>
         
          
          
        )})}
        </div>
        </div>


)}
export default cart