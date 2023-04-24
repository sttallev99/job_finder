import axios from 'axios';
import { toast } from 'react-toastify';

import { 
    ALL_USERS_LOAD_FAIL,
    ALL_USERS_LOAD_REQUEST,
    ALL_USERS_LOAD_SUCCESS,
    SINGLE_USER_LOAD_FAIL,
    SINGLE_USER_LOAD_REQUEST,
    SINGLE_USER_LOAD_SUCCESS,
    USER_APPLY_JOB_FAIL, 
    USER_APPLY_JOB_REQUEST, 
    USER_APPLY_JOB_SUCCESS, 
    USER_LOAD_FAIL, 
    USER_LOAD_REQUEST, 
    USER_LOAD_SUCCESS, 
    USER_LOGOUT_FAIL, 
    USER_LOGOUT_REQUEST, 
    USER_LOGOUT_SUCCESS, 
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNUP_FAIL, 
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from '../constants/jobConstants';

//sign in action
export const userSignInAction = (user) => async(dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST});
    try {
        const { data } = await axios.post(`https://jobsfinder-api.onrender.com/api/signin`, user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        document.cookie = `token=${data.token}`
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success('Login Successfully!');
    } catch(error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//sign up action
export const userSignUpAction = (user) => async(dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST});
    try {
        await axios.post(`https://jobsfinder-api.onrender.com/api/signup`, user);
        dispatch({
            type: USER_SIGNUP_SUCCESS
        });
        toast.success('Register Successfully!');
    } catch(error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//log out action
export const userLogoutAction = () => async(dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST});
    try {
        const { data } = await axios.get('https://jobsfinder-api.onrender.com/api/logout');
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success('Log out successfully!');
    } catch(error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }

}

//user profile action
export const userProfileAction = () => async(dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST});
    try {
        const { data } = await axios.get('https://jobsfinder-api.onrender.com/api/me', { withCredentials: true })
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }

}

//user job apply action
export const userApplyJobAction = (job) => async(dispatch) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST});
    try {
        const { data } = await axios.post(`https://jobsfinder-api.onrender.com/api/user/jobhistory`, job);

        dispatch({
            type: USER_APPLY_JOB_SUCCESS,
            payload: data
        });
        toast.success('Apply successfully for this job!');
    } catch(error) {
        dispatch({
            type: USER_APPLY_JOB_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//all users action
export const allUsersAction = () => async(dispatch) => {
    dispatch({ type: ALL_USERS_LOAD_REQUEST});
    try {
        const { data } = await axios.get(`https://jobsfinder-api.onrender.com/api/allUsers`);
        dispatch({
            type: ALL_USERS_LOAD_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: ALL_USERS_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

//delete user action
export const deleteUserAction = (id) => async(dispatch) => {
    dispatch({ type: ALL_USERS_LOAD_REQUEST});
    try {
        const { data } = await axios.delete(`https://jobsfinder-api.onrender.com/api/admin/user/delete/${id}`);
        dispatch({
            type: ALL_USERS_LOAD_SUCCESS,
            payload: data
        });
        toast.success('Delete user successfully')
    } catch(error) {
        dispatch({
            type: ALL_USERS_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

//single user action
export const singleUserAction = (id) => async(dispatch) => {
    dispatch({ type: SINGLE_USER_LOAD_REQUEST});
    try {
        const { data } = await axios.get(`https://jobsfinder-api.onrender.com/api/user/${id}`);
        dispatch({
            type: SINGLE_USER_LOAD_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: SINGLE_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}