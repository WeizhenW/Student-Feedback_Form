import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import AdminItem from "../AdminItem/AdminItem";

class Admin extends Component {

    listReload = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(
            response => {
                console.log(response);
                this.props.dispatch({
                    type: 'SET_FEEDBACK_LIST',
                    payload: response.data,
                })
            }
        )
    }
   componentDidMount(){
       this.listReload();
    };
    
    render() {
        return (
            <div>
            <h2>Feedback Results</h2>
            <table>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>                
                {this.props.reduxState.adminReducer.map(feedback => <AdminItem feedback={feedback} listReload={this.listReload}/>)}
            </table>            

            {/* {JSON.stringify(this.props.reduxState.adminReducer)}; */}
        </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Admin);
