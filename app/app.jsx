//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom' ;

//Compents
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

//extra codes if needed

//render
ReactDOM.render(
  <Router>
      <div>
        <Main>
          <Route exact path="/" component={Weather}/>
          <Route path="/about" component={About}/>
          <Route path="/example" component={Examples}/>
        </Main>
      </div>
  </Router>,
  document.getElementById('app')
);
