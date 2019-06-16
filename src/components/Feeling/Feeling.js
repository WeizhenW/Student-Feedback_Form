//react
import React, { Component } from 'react';
//redux
import { connect } from 'react-redux';
//routers
import { HashRouter as Router, Link } from 'react-router-dom';

//reusable components
import Header from '../Header/Header';
import Review from '../Review/Review';

//material ui
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//material ui styles
const styles = {
    card: {
        maxWidth: '50%',
        height: 250,
        margin: '20px auto',
    },
    button: {
        margin: '10px auto',
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 300,
        margin: 'auto'
    },
}

class Feeling extends Component {
    //function to capture the input and dispatch to reducer to store the value
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: { [propertyName]: event.target.value },
        })
    }
    //function to clear all the input and start again
    handleClearAll = () => {
        this.props.dispatch({
            type: 'CLEAR_FEEDBACK',
        })
    }

    render() {
        return (
            <div>
                <Header />
                {/* use material ui Card */}
                <Card style={styles.card}>
                    <h2>How are you feeling today?</h2>
                    <FormControl style={styles.form}>
                        <InputLabel htmlFor="feeling">Feeling</InputLabel>
                        {/* drop down list in scale 1-5 */}
                        <Select
                            value={this.props.reduxState.feedbackReducer.feeling}
                            onChange={this.handleChangeFor('feeling')}
                        >
                            <MenuItem value=""><em></em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    {/* link to the next page */}
                    <CardActions style={styles.button}>
                        <Router>
                            <Link to="/understanding" ><Button  variant="contained" color="primary" style={styles.button} >Next</Button></Link>
                        </Router>
                        <Button onClick={this.handleClearAll} variant="contained" color="secondary">Clear All</Button>
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
export default connect(mapReduxStateToProps)(Feeling);
