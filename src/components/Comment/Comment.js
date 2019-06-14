import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';



class Comment extends Component {
    state = {
        feeling: '',
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
            <h2>Any comments you want to leave?</h2>
            <p>Comments?</p>
            <input type="text" placeholder="your feeling" onChange={this.handleChangeFor('comment')}></input>
            <Router>            
                <Link to="/understanding" ><button onClick={this.handleSubmit}>Next</button></Link>
            </Router>
        </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Comment);
