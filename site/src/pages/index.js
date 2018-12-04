import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import InputFormPage from './input-form';
import WriteUpPage from './write-up';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            color: 'white',
            textDecoration: 'none'
        }
    }
};


const AppRouter = props => {
    const { classes } = props;
    return (
        <Router>
            <div>
                <nav style={{ marginBottom: '16px' }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                Airbnb Income Prediction
                            </Typography>

                            <NavLink className={classes.link} to="/"><Button color="inherit">Home</Button></NavLink>
                            <NavLink className={classes.link} to="/write-up/"><Button color="inherit">Write Up</Button></NavLink>
                        </Toolbar>
                    </AppBar>
                </nav>
                <Route path="/" exact component={InputFormPage} />
                <Route path="/write-up/" component={WriteUpPage} />
            </div>
        </Router>
    );
}

export default withStyles(styles)(AppRouter);
