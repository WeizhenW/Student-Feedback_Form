import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';
import Header from '../Header/Header';

class Support extends Component {
  
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {[propertyName]: event.target.value},
        })
    }

    render() {
        return (
            <div>
                <Header />
                <h2>How well are you being supported?</h2>
                <p>Supported?</p>
                <input type="number" placeholder="support" onChange={this.handleChangeFor('support')}></input>
                <Router>            
                    <Link to="/comment" ><button>Next</button></Link>
                </Router>
                <Review />

             </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Support);
