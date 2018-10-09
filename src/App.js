import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Programme from './components/Programme';
import Home from './components/Home';
import Call from './components/Call';
import About from './components/About';
import Navigation from './components/Navigation';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Navigation />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/programme' component={Programme} />
        <Route path='/contact' component={Call}/>
        <Route path='/A-propos' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
