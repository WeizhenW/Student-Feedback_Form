import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
//for routers
import { HashRouter as Router, Route } from 'react-router-dom';
//page components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
//material ui components
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
//define theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#29b6f6'
    },
    secondary: {
      main: '#fdd835'
    },
    error: {
      main: '#c62828'
    }
  },
});

class App extends Component {

  //function to capture the input and dispatch to reducer to store the value
  handleChangeFor = (propertyName) => (event) => {
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: { [propertyName]: event.target.value },
    })
  }
  //function to clear all the input and start again
  handleClearAll = () => {
    this.props.dispatch({
      type: 'CLEAR_FEEDBACK',
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* below define routers */}
          {/* trying to pass the function through routers */}
          <Router>
            <Route path="/" exact
              render={(routeProps) =>
                <Feeling
                  handleChangeFor={this.handleChangeFor}
                  handleClearAll={this.handleClearAll} />} />
            <Route path="/understanding"
              render={(routeProps) =>
                <Understanding
                  handleChangeFor={this.handleChangeFor}
                  handleClearAll={this.handleClearAll} />} />
            <Route path="/support"
              render={(routeProps) =>
                <Support
                  handleChangeFor={this.handleChangeFor}
                  handleClearAll={this.handleClearAll} />} />
            <Route path="/comment" render={(routeProps) =>
              <Comment
                handleChangeFor={this.handleChangeFor}
                handleClearAll={this.handleClearAll} />} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/admin" component={Admin} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}
const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})
export default connect(mapReduxStateToProps)(App);
