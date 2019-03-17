import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from "./redux/store";
import AppTemplate from './components/AppTemplate/AppTemplate';
import App from "./containers/App/App";
import About from './containers/About/About';
import 'typeface-roboto';

export const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppTemplate>
        <Switch>
            <Route path="/home" component={App} />
            <Route path="/about" component={About} />
        </Switch>
      </AppTemplate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);