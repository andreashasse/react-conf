import React, { Component } from 'react';
import Config from './config.js';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App" proc={process} conf={Config}>
        url: {process.env.PUBLIC_URL}
        custom config: {Config.s3.BUCKET}
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
