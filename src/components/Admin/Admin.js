import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AdminItem from '../AdminItem/AdminItem';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    table: {
        width: '60%',
        margin: '30px auto',
    },
    tableCell: {
        border: '1px solid grey',
        fontSize: 16,
        textAlign: 'center'
    }
}


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
    componentDidMount() {
        this.listReload();
    };

    render() {
        return (
            <div>
                <header className="App-header" color="primary">
                    <h1 className="App-title ">ADMIN - Feedback Results</h1>
                </header>

                    <Table style={styles.table}>
                        <TableHead >
                            <TableRow>
                                <TableCell style={styles.tableCell}>Feeling</TableCell>
                                <TableCell style={styles.tableCell}>Comprehension</TableCell>
                                <TableCell style={styles.tableCell}>Support</TableCell>
                                <TableCell style={styles.tableCell}>Comments</TableCell>
                                <TableCell style={styles.tableCell}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={styles.tableBody}>
                            {this.props.reduxState.adminReducer.map(feedback => <AdminItem feedback={feedback} listReload={this.listReload} />)}
                        </TableBody>
                    </Table>
            </div >
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Admin);
