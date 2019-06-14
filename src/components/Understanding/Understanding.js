import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import Review from '../Review/Review';


class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
        // console.log(this.state);
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
            <h2>How well are you understanding the content?</h2>
            <p>Understanding?</p>
            <input type="number" placeholder="your understanding" onChange={this.handleChangeFor('understanding')}></input>
            <Router>            
                <Link to="/support" ><button onClick={this.handleSubmit}>Next</button></Link>
            </Router>
            <Review />

        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Understanding);
