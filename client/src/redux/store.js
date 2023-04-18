import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { loadJobReducers, loadSingleJobReducer } from './reducers/jobReducer';
import { loadJobTypeReducers } from './reducers/jobTypeReducer';
import { userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/userReducer';

//combine reducers
const reducer = combineReducers({
    loadJob: loadJobReducers,
    jobTypeAll: loadJobTypeReducers,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadSingleJobReducer,
    userJobApplication: userApplyJobReducer
});

//initial state
let initialState = {
        signIn: {
            userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
        }
    };
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;