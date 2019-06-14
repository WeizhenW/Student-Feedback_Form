import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


class Support extends Component {
    state = {
        comment: '',
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
            <input type="number" placeholder="your feeling" onChange={this.handleChangeFor('support')}></input>
            <Router>            
                <Link to="/comment" ><button onClick={this.handleSubmit}>Next</button></Link>
            </Router>
        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Support);
