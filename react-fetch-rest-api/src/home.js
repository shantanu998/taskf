import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class home extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  // [...]
  render() {

    return (
      
       <div className="container">
        <div className="col-xs-12">
        <h1>My users</h1>
        {this.state.todos.map((todo) => (
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
          
        ))}
        </div>
        
       </div>
       
    );
  }
  
}

export default home;