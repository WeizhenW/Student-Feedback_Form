import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

class Admin extends Component {
   componentDidMount(){
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
    };
    
    render() {
        return (
            <div>
            <h2>Feedback Results</h2>
            <table>                
                {this.props.reduxState.adminReducer.map(feedback => 
                    <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                    </tr>)}
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
