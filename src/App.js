import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" proc={process}>
        url: <p>{process.env.PUBLIC_URL}</p>!
      </div>
    );
  }
}

export default App;
