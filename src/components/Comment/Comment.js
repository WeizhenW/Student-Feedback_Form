import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';

class Comment extends Component {


    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {[propertyName]: event.target.value},
        })
    }

    handleNextPage = () => {
        
    }

    render() {
        return (
            <div>
            <h2>Any comments you want to leave?</h2>
            <p>Comments?</p>
            <input type="text" placeholder="your comments" onChange={this.handleChangeFor('comment')}></input>
            <Router>            
                <Link to="/review" ><button onClick={this.handleNextPage}>Next</button></Link>
            </Router>
            <Review />

        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Comment);
