import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import Header from '../Header/Header';

//material ui
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

const styles = {
    card: {
        maxWidth: '80%',
        height: 250,
        margin: '20px auto',
    },
    textField: {
        width: '50%',
    }
}

class Comment extends Component {
    handleChangeFor = (propertyName) => (event) => {
        this.props.dispatch({
            type: 'SET_FEEDBACK',
            payload: {[propertyName]: event.target.value},
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Card style={styles.card}>
                <h2>Any comments you want to leave?</h2>
                <TextField 
                    type="text" 
                    label="your comments" 
                    variant="outlined" 
                    multiline
                    rows="4"
                    style={styles.textField}
                    onChange={this.handleChangeFor('comment')} />            
                </Card>
                <Review />
            </div>
         );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})
export default connect(mapReduxStateToProps)(Comment);
