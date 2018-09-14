import React, { Component } from 'react';
import Config from './config.js';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList'
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from '@material-ui/core/Switch';

class App extends Component {
  state = {
    checked: false,
  };
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
  render() {
    const { checked } = this.state;
    return (
        <React.Fragment>
          <CssBaseline />
          <p>url: {process.env.PUBLIC_URL}</p>
          <p>custom config: {Config.s3.BUCKET}</p>
          Simple state
          <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
          <p>checked: {checked.toString()}</p>
          <AddTodo/>
          <VisibleTodoList />
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </React.Fragment>
    );
  }
}

export default App;
