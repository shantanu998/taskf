import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from "./store";
class home extends Component {
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
        store.dispatch({
            type: "initialize",
            payload: {
              value: data,
            },
          });
      console.log(store.getState())
    })
    .catch(console.log)
    store.subscribe(() => {
      console.log("Store changed ",store.getState())
    });
  }

  //var list[]=store.getState().todos
  
  // [...]
  render() {
     console.log("88")
    return (
      
       <div className="container">
        <div className="col-xs-12">
        <h1>My users</h1>
        {store.getState().map((todo) => {return(
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.email}
              </h6>
              <h1>
              <Link to="/address">Address for user</Link>

              </h1>
            </div>
          
          </div>
          
        )})}
        </div>
        
       </div>
       
    );
  }
  
}

export default home;