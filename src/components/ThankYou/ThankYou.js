import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header';

const styles = {
    button: {
        marginTop: 50,
        height: 60,
        width: 300,
        fontSize: 18,
    }
}

class ThankYou extends Component {

    handleBackToHome = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Thank you for your feedback!</h2>
                <Router>
                    <Link to="/"><Button style={styles.button} variant="contained" color="primary" onClick={this.handleBackToHome}>Leave New Feedback</Button></Link>
                </Router>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(ThankYou);
