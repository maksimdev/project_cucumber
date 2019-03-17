import React from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { push } from 'connected-react-router'
import { store } from '../../index';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = state => ({
  status: state.external.status
});

function ConnectedAppTemplate (props) {
  return (
    <>
    <AppBar position="static">
        <Toolbar>
              { props.status }
            <Typography variant="h6" color="inherit">
              App
            </Typography>
            <Button variant="contained" color="primary" onClick={() => {store.ws_dispatch(push('/'));}}>
              Home
            </Button>
            <Button variant="contained" color="primary" onClick={() => {store.ws_dispatch(push('/about'));}}>
              About
            </Button>
        </Toolbar>
    </AppBar>
    {props.children}
    </>
  )
};

const AppTemplate = connect(mapStateToProps)(ConnectedAppTemplate);

export default AppTemplate;