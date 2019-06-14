import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';



class Feeling extends Component {

    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {[propertyName]: event.target.value},
        })
    }

    render() {
        return (
            <div>
            <h2>How are you feeling today?</h2>
            <p>Feeling?</p>
            <input type="number" placeholder="your feeling" onChange={this.handleChangeFor('feeling')}></input>
            <Router>            
                <Link to="/understanding" ><button onClick={this.handleNextPage}>Next</button></Link>
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
