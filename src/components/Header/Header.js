import React, { Component } from 'react';
import { HashRouter as Router, Link as RouterLink } from 'react-router-dom';


//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';


//header file
class Header extends Component {

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { anchorEl } = this.state;
        return (
            // <header className="App-header" color="primary">
            //     <h1 className="App-title ">Feedback!</h1>
            //     <h4><i>Don't forget it!</i></h4>
            // </header>

            <AppBar position="static">
                <Toolbar>
                    
                    <IconButton
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true" onClick={this.handleClick} variant="h6">
                        Menu
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}><Link to="/" component={RouterLink}>Feeling</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/understanding" component={RouterLink}>Comprehension</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/support" component={RouterLink}>Support</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/comment" component={RouterLink}>Comments</Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to="/admin" component={RouterLink}>Admin Page</Link></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>


        );
    }
}

export default Header;
