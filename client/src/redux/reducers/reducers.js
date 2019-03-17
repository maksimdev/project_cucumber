import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import externalReducer from "./externalReducer";
import articleReducer from "./articleReducer";

export default (history) =>  combineReducers({
    router: connectRouter(history),
    external: externalReducer,
    articles: articleReducer
});