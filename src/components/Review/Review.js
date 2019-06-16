import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Link } from 'react-router-dom';

//material ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const styles = {
    card: {
        maxWidth: '50%',
        height: 250,
        margin: '30px auto',
    },
    list: {
        listStyle: 'none',
        fontSize: 20,
    },
    button: {
        height: 50,
        width: 180,
    },
}

class Review extends Component {
    //function to trigger the axios post route and pass the feedbackReducer's state value
    handleSubmitFeedback = () => {
        axios({
            method: 'POST',
            url: '/submit',
            data: this.props.reduxState.feedbackReducer,
        })
    }
    //function to assess if all the feedback fields have been filled
    completed = () => {
        const feedback = this.props.reduxState.feedbackReducer;
        return feedback.feeling && feedback.understanding && feedback.support && feedback.comment;
    }

    render() {
        return (
            <div>
                <Card style={styles.card}>
                    <h2>Review Your Feedback</h2>
                    <ul style={styles.list}>
                        {/* render the feedbackReducer's value in DOM */}
                        <li>Feeling: {this.props.reduxState.feedbackReducer.feeling}</li>
                        <li>Understanding: {this.props.reduxState.feedbackReducer.understanding}</li>
                        <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
                        <li>Comment: {this.props.reduxState.feedbackReducer.comment}</li>
                    </ul>
                    {/* check if all the fields completed and show the button with different text */}
                    {this.completed() ?
                        <Router>
                            {/* trigger the submit on click */}
                            <Link to="/thankyou"><Button style={styles.button} variant="contained" color="primary" onClick={this.handleSubmitFeedback}>Submit</Button></Link>
                        </Router>
                        :
                        <Button style={styles.button} variant="contained" color="secondary" disabled>Incomplete</Button>
                    }
                </Card>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Review);
