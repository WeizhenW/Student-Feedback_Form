import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


class ThankYou extends Component {

    handleBackToHome = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
    }
 
    render() {
        return (
            <div>
            <h2>Thank you!</h2>
            <Router>
              <Link to="/"><p onClick={this.handleBackToHome}>Leave New Feedback</p></Link>  
            </Router>
        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(ThankYou);
