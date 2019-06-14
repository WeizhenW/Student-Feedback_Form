import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';


class Support extends Component {
    state = {
        support: '',
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: this.state,
        })
    }

    render() {
        return (
            <div>
            <h2>How well are you being supported?</h2>
            <p>Feeling?</p>
            <input type="number" placeholder="support" onChange={this.handleChangeFor('support')}></input>
            <Router>            
                <Link to="/comment" ><button onClick={this.handleSubmit}>Next</button></Link>
            </Router>
            <Review />

        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Support);
