import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function ConnectedAppTemplate (props) {
  return (
    <>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
              App
            </Typography>
            <Button variant="contained" color="primary" onClick={() => {props.push('/home');}}>
              Home
            </Button>
            <Button variant="contained" color="primary" onClick={() => {props.push('/about');}}>
              About
            </Button>
        </Toolbar>
    </AppBar>
    {props.children}
    </>
  )
};

const AppTemplate = connect(null, { push })(ConnectedAppTemplate);

export default AppTemplate;