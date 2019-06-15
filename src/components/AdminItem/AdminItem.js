import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {

    handleDeleteFeedback = () => {
        axios({
            method: 'DELETE',
            url: '/feedback/'+this.props.feedback.id,
        }).then(
            () => {
                this.props.listReload();
            }
        ).catch(
            error => {
                console.log('error with axios delete', error);
            }
        )
    }

    render() {
        return (
        <tr key={this.props.feedback.id}>
            <td>{this.props.feedback.feeling}</td>
            <td>{this.props.feedback.understanding}</td>
            <td>{this.props.feedback.support}</td>
            <td>{this.props.feedback.comments}</td>
            <td><button onClick={this.handleDeleteFeedback}>Delete</button></td>
        </tr>)
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Admin);
