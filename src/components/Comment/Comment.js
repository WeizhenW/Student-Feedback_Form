import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';
//router
import { HashRouter as Router, Link } from 'react-router-dom';

//material ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//material ui style
const styles = {
    card: {
        maxWidth: '50%',
        height: 250,
        margin: '20px auto',
    },
    textField: {
        width: '50%',
    },
    button: {
        margin: '10px auto',
        justifyContent: 'center'
    },
}

class Comment extends Component {
    // //function to capture the text input and dispatch to change the reducer state
    // handleChangeFor = (propertyName) => (event) => {
    //     this.props.dispatch({
    //         type: 'SET_FEEDBACK',
    //         payload: { [propertyName]: event.target.value },
    //     })
    // }
    // //function to clear all the input and restart the survey
    // handleClearAll = () => {
    //     this.props.dispatch({
    //         type: 'CLEAR_FEEDBACK',
    //     })
    // }

    render() {
        return (
            <div>
                <Header />
                <Card style={styles.card}>
                    <h2>Any comments you want to leave?</h2>
                    {/* material ui text field */}
                    <TextField
                        type="text"
                        label="your comments"
                        variant="outlined"
                        multiline
                        rows="4"
                        style={styles.textField}
                        onChange={this.props.handleChangeFor('comment')} />
                    <CardActions style={styles.button}>
                        <Router>
                            <Link to="/"><Button onClick={this.props.handleClearAll} variant="contained" color="secondary">Clear All</Button></Link>
                        </Router>
                    </CardActions>
                </Card>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Comment);
