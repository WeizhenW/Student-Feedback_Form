import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';


class Review extends Component {

    handleSubmitFeedback = () => {
        axios({
            method: 'POST',
            url: '/submit',
            data: this.props.reduxState.feedbackReducer,
        })
    }
    completed = () => {
        const feedback = this.props.reduxState.feedbackReducer;
        return feedback.feeling && feedback.understanding && feedback.support && feedback.comment;
    }

    render() {
        return (
            <div>
            <h2>Review Your Feedback</h2>
            <ul>
                <li>Feeling: {this.props.reduxState.feedbackReducer.feeling}</li>
                <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
                <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
                <li>Comment: {this.props.reduxState.feedbackReducer.comment}</li>
            </ul>
            {this.completed()?
                <Router>
                    <Link to="/thankyou"><button onClick={this.handleSubmitFeedback}>Submit</button></Link>
                </Router>
            :
                <button>Incomplete</button>
            }
        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Review);
