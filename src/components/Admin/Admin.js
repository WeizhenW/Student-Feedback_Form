import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import AdminItem from "../AdminItem/AdminItem";
import Header from '../Header/Header';


class Admin extends Component {
//function to trigger the get rote and dispatch the value to reducer
    listReload = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(
            response => {
                this.props.dispatch({
                    type: 'SET_FEEDBACK_LIST',
                    payload: response.data,
                })
            }
        )
    }
    //call the reload function after component mounted in DOM
   componentDidMount(){
       this.listReload();
    };
    
    render() {
        return (
            <div>
                <Header />
                <h2>Feedback Results</h2>
                <table>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>  
                    {/* loop through to append feedbacks in DOM               */}
                    {this.props.reduxState.adminReducer.map(feedback => <AdminItem feedback={feedback} listReload={this.listReload}/>)}
                </table>            
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Admin);
