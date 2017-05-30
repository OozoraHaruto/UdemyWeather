//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route} from 'react-router-dom' ;

//Compents
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

//extra codes if needed

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App CSS
require('style-loader!css-loader!applicationStyles');

//render
ReactDOM.render(
  <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={Weather}/>
            <Route exact path="/about" component={About}/>
            <Route path="/example" component={Examples}/>
          </Switch>
        </Main>
  </Router>,
  document.getElementById('app')
);
