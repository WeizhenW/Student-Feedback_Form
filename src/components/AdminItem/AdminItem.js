import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material ui
//material ui
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    tableCell: {
        border: '1px solid grey',
        textAlign: 'center'

    }
}

class Admin extends Component {
    //function to trigger the delete route and delete one feedback from database
    handleDeleteFeedback = () => {
        alert('confirm delete');
        axios({
            method: 'DELETE',
            url: '/feedback/'+this.props.feedback.id,
        }).then(
            () => {
                //reload page
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
            // structure of each table row
        <TableRow key={this.props.feedback.id} >
            <TableCell style={styles.tableCell}>{this.props.feedback.feeling}</TableCell>
            <TableCell style={styles.tableCell}>{this.props.feedback.understanding}</TableCell>
            <TableCell style={styles.tableCell}>{this.props.feedback.support}</TableCell>
            <TableCell style={styles.tableCell}>{this.props.feedback.comments}</TableCell>
            <TableCell style={styles.tableCell}><button onClick={this.handleDeleteFeedback}>Delete</button></TableCell>
        </TableRow>)
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Admin);
