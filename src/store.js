import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {reportsReducer} from './reducers/reportReducers'
import { logReducer } from './reducers/loginReducers';
const reducer = combineReducers({
    reports: reportsReducer,
    auth: logReducer
     
})

let initialState = {
    
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))


export default store;