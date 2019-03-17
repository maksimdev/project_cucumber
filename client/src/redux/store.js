import { createStore, combineReducers } from "redux";
import externalReducer from "./reducers/externalReducer";
import articleReducer from "./reducers/articleReducer";
import ws_connected from '../lib/ws_client';

const rootReducer = combineReducers({ external: externalReducer, articles: articleReducer });

const store = ws_connected(createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

console.log(store);
export default store;