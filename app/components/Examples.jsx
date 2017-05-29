import React from 'react';
import {NavLink} from 'react-router-dom';

var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center pageTitle">Example</h1>
      <p>Here are a few example location to try out</p>
      <ol>
        <li><NavLink to="/?location=Singapore,SG">Singapore, Singapore</NavLink></li>
        <li><NavLink to="/?location=Tokyo,JP">Tokyo, Japan</NavLink></li>
      </ol>
    </div>
  )
}

module.exports = Examples;
