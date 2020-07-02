import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from "./store";
import cstore from "./cart/cartStore";
import './home.css'
class home extends Component {
  
  state={

    todos:[]
  }
  componentDidMount() {
    fetch(" http://localhost:5001/products")
    .then(res => res.json())
    .then((data) => {
        store.dispatch({
            type: "initialize",
            payload: {
              value: data,
            },
          });
          this.setState({
            todos:store.getState()
          })
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
      
       
        <div className="App">
        <h1>My users</h1>
        <Link to={"/cart"}>cart</Link>
{console.log(789)}
{console.log( cstore.getState().age)}
        
        <div className="Products">
        {store.getState().map((todo) => {return(
          
          
            <div className="Item">
              <Link to={"/"+store.getState().indexOf(todo)}>
            <img src =  {todo.url}  alt = {todo.name} className="Img" />
            </Link>
              <h5 className="card-title">{todo.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.price}
              </h6>
              <button
            
            
            onClick={() =>
              cstore.dispatch({
                type: 'ADD',
                value: todo,
                payload: {
                  id: todo.id,
                },
              })
            }
          >
            add+
          </button>
              <h1>
              {console.log( cstore.getState().age)}

              </h1>
            </div>
          
          
          
        )})}
        </div>
        </div>
        
       
       
    );
  }
  
}

export default home;