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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//material ui styles
const styles = {
    card: {
        maxWidth: '80%',
        height: 250,
        margin: '20px auto',
    },
    button: {
        float: "right",
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 300,
        margin: 'auto'
    },
    
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
                    <FormControl style={styles.form}>
                        <InputLabel htmlFor="understanding">Understanding</InputLabel>
                        <Select
                            value={this.props.reduxState.feedbackReducer.understanding}
                            onChange={this.handleChangeFor('understanding')}
                        >
                            <MenuItem value=""><em></em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <Router>
                        <Link to="/support" ><Button style={styles.button} variant="contained" color="secondary">Next</Button></Link>
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
