import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';
import Header from '../Header/Header';
//material ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';



const styles = {
    card: {
        maxWidth: '80%',
        margin: '20px auto',
    },
    button: {
        alignItems: "right",
    }
}

class Feeling extends Component {
    //function to capture the input and dispatch to reducer to store the value
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { [propertyName]: event.target.value },
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Card style={styles.card}>
                    <h2>How are you feeling today?</h2>
                    <TextField type="number" label="Feeling" variant="outlined" margin="normal" onChange={this.handleChangeFor('feeling')}></TextField>
                    {/* link to the next page */}
                    <Router>
                        <Link to="/understanding" ><Button variant="contained" color="secondary" style={styles.button} >Next</Button></Link>
                    </Router>
                </Card>
                <Review />

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Feeling);
