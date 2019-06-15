import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material ui
//material ui
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    tableCell: {
        border: '1px solid grey',
        textAlign: 'center'
    },
    icon: {
        fontSize: 28,
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
            <TableCell style={styles.tableCell}>        
                <DeleteIcon 
                    color="error" 
                    style={styles.icon}
                    onClick={this.handleDeleteFeedback} />
            </TableCell>
        </TableRow>)
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Admin);
