import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './Youtube';

// <iframe width="560" height="315" src="https://www.youtube.com/embed/itdTtu9heSU" frameborder="0" allowfullscreen></iframe>
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Youtube/>
      </div>
    );
  }
}

export default App;
