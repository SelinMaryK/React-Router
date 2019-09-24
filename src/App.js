import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';


const User = ({match}) =>{
  return(<div>Welcome User {match.params.username}</div>);
}

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <ul>
            <li><NavLink to="/" exact activeStyle={
              {color:'red'}
              }>Home</NavLink></li>
            <li><NavLink to="/about" exact activeStyle={
              {color:'red'}
              }>About</NavLink></li>
            <li><NavLink to="/user/john" exact activeStyle={
              {color:'red'}
              }>User John</NavLink></li>
          </ul>
          <Route path="/" exact strict render={
            ()=>{
              return (<h2>Welcome Home</h2>);
            }
          }/>
          <Route path="/about" exact render={
            ()=>{
              return (<h2>Welcome About</h2>);
            }
          }/>
          <Route path="/user/:username" exact strict component={User}/>
        </div>
      </Router>
    );
  }
}

export default App;


