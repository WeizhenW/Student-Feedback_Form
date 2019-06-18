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

class Understanding extends Component {

    // handleChangeFor = (propertyName) => (event) => {
    //     this.props.dispatch({
    //         type: 'SET_FEEDBACK',
    //         payload: { [propertyName]: event.target.value },
    //     })
    // }

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
                    <h2>How well are you understanding the content?</h2>
                    <FormControl style={styles.form}>
                        <InputLabel htmlFor="understanding">Understanding</InputLabel>
                        <Select
                            value={this.props.reduxState.feedbackReducer.understanding}
                            onChange={this.props.handleChangeFor('understanding')}
                        >
                            <MenuItem value=""><em></em></MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <CardActions style={styles.button}>
                        <Router>
                            <Link to="/support" ><Button variant="contained" color="primary">Next</Button></Link>
                            <Link to="/" ><Button onClick={this.props.handleClearAll} variant="contained" color="secondary">Clear All</Button></Link>
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
export default connect(mapReduxStateToProps)(Understanding);
