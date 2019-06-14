import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route path="/" exact component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support"  component={Support} />
          <Route path="/comment"  component={Comment} />
          <Route path="/review"  component={Review} />
          <Route path="/thankyou"  component={ThankYou} />
        </Router>
        
      </div>
    );
  }
}

export default App;
