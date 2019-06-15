import React, { Component } from 'react';
import './App.css';
//for router
import { HashRouter as Router, Route } from 'react-router-dom';
//page components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
//material ui
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

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

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* below define routers */}
          <Router>
            <Route path="/" exact handleChangeFor={this.handleChangeFor} component={Feeling} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/support"  component={Support} />
            <Route path="/comment"  component={Comment} />
            {/* <Route path="/review"  component={Review} /> */}
            <Route path="/thankyou"  component={ThankYou} />
            <Route path="/admin"  component={Admin} />
          </Router>
        </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
