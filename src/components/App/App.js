import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <br/>
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
    );
  }
}

export default App;
