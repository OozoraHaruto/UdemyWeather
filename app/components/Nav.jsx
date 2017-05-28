import React from 'react';
import {NavLink} from 'react-router-dom';

var Nav = (props) =>{
  return (
    <div>
      <h1>Nav Component</h1>
      <NavLink exact to="/" activeStyle={{fontWeight:'bold'}}>Get Weather</NavLink>
      <NavLink to="/about" activeStyle={{fontWeight:'bold'}}>About</NavLink>
      <NavLink to="/example" activeStyle={{fontWeight:'bold'}}>Example</NavLink>
    </div>
  )
}

module.exports = Nav;
