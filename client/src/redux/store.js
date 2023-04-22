import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { createJobReducer, loadJobReducers, loadSingleJobReducer } from './reducers/jobReducer';
import { createJobTypeReducers, loadJobTypeReducers } from './reducers/jobTypeReducer';
import { allUsersReducer, signleUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/userReducer';
import { deleteUserAction, singleUserAction, userSignUpAction } from './actions/userAction';
import { deleteJobAction } from './actions/jobAction';

//combine reducers
const reducer = combineReducers({
    loadJob: loadJobReducers,
    jobTypeAll: loadJobTypeReducers,
    createJobType: createJobTypeReducers,
    signIn: userReducerSignIn,
    signUp: userSignUpAction,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleJob: loadSingleJobReducer,
    createJob: createJobReducer,
    deleteJob: deleteJobAction,
    userJobApplication: userApplyJobReducer,
    allUsers: allUsersReducer,
    singleUser: signleUserReducer,
    deleteUser: deleteUserAction
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