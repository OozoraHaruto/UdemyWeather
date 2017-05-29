import React from 'react';
import {NavLink} from 'react-router-dom';
import queryString from 'query-string';

class Nav extends React.Component{
  onSearch = (e) =>{
    e.preventDefault();

    var location = this.search.value;

    if (location.length > 0){
      this.search.value = '';
      
      var encodedLocation = queryString.stringify({location: location});
      window.location.hash = '#/?' + encodedLocation
    }
  };

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Udemy Weather</li>
            <li><NavLink exact to="/" activeStyle={{fontWeight:'bold'}}>Get Weather</NavLink></li>
            <li><NavLink to="/about" activeStyle={{fontWeight:'bold'}}>About</NavLink></li>
            <li><NavLink to="/example" activeStyle={{fontWeight:'bold'}}>Example</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref={(ref) => this.search = ref} placeholder="City Name"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = Nav;
