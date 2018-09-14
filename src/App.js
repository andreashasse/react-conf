import React, { Component } from 'react';
import Config from './config.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App" proc={process} conf={Config}>
        url: {process.env.PUBLIC_URL}
        custom config: 
      </div>
    );
  }
}

export default App;
