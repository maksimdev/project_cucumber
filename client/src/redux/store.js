import { createStore } from "redux";
import rootReducer from "./reducers/index";
import ws_connected from '../lib/ws_client';

const store = ws_connected(createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

console.log(store);
export default store;