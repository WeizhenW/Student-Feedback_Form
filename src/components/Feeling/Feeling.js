import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {
    state = {
        feeling: '',
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
        // console.log(this.state);
    }

    handleSubmit = () => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.feeling,
        })
    }

    render() {
        return (
            <div>
            <h2>How are you feeling today?</h2>
            <p>Feeling?</p>
            <input type="number" placeholder="your feeling" onChange={this.handleChangeFor('feeling')}></input>
            <button onClick={this.handleSubmit}>Next</button>

        </div>
         );
    }
}

export default connect()(Feeling);
