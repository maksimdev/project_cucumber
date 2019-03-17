import { applyMiddleware, compose, createStore } from "redux";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/reducers';
import ws_connected from '../lib/ws_client';

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const store = ws_connected(createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
      )
    )
  ))

  return store
}