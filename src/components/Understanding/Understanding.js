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

class Understanding extends Component {

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
                    <h2>How well are you understanding the content?</h2>
                    <TextField type="number" label="understanding" onChange={this.handleChangeFor('understanding')}></TextField>
                    <Router>
                        <Link to="/support" ><Button variant="contained" color="secondary">Next</Button></Link>
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
export default connect(mapReduxStateToProps)(Understanding);
