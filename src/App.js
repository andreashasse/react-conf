import React, { Component } from 'react';
import Config from './config.js';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import green from '@material-ui/core/colors/green';
import PageviewIcon from '@material-ui/icons/Pageview';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class App extends Component {
  state = {
    checked: false,
  };
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
  render() {
      const { checked } = this.state;
      const { classes } = this.props;
    return (
        <React.Fragment>
          <CssBaseline />
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Avatar className={classes.greenAvatar}>
                <PageviewIcon />
              </Avatar>
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="search">Search</InputLabel>
                <Input
                  name="search"
                  id="search"
                  autoFocus
                  />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                >
                Sign in
              </Button>
            </Paper>
          </main>
          <p>url: {process.env.PUBLIC_URL}</p>
          <p>custom config: {Config.s3.BUCKET}</p>
          Simple state
          <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
          <p>checked: {checked.toString()}</p>
          <AddTodo/>
          <VisibleTodoList />

        </React.Fragment>
    );
  }
}
export default withStyles(styles)(App);
