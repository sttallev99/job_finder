import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { loadJobReducers } from './reducers/jobReducer';
import { loadJobTypeReducers } from './reducers/jobTypeReducer';

//combine reducers
const reducer = combineReducers({
        loadJob: loadJobReducers,
        jobTypeAll: loadJobTypeReducers
});

//initial state
let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;