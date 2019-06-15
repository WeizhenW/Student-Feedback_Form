import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';
import Header from '../Header/Header';

class Feeling extends Component {
    //function to capture the input and dispatch to reducer to store the value
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
                <h2>How are you feeling today?</h2>
                <p>Feeling?</p>
                <input type="number" placeholder="your feeling" onChange={this.handleChangeFor('feeling')}></input>
                {/* link to the next page */}
                <Router>            
                    <Link to="/understanding" ><button>Next</button></Link>
                </Router>
                <Review />
            </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Feeling);
