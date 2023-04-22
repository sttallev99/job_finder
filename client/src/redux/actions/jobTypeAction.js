import axios from 'axios';
import { CREATE_JOB_TYPE_FAIL, CREATE_JOB_TYPE_REQUEST, CREATE_JOB_TYPE_SUCCESS, DELETE_JOB_TYPE_FAIL, DELETE_JOB_TYPE_REQUEST, DELETE_JOB_TYPE_SUCCESS, JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_SUCCESS } from '../constants/jobConstants';

export const jobTypeLoadAction = () => async(dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST});
    try {
        const { data } = await axios.get('/api/type/jobs');
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch(error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }

}

//create job type action
export const createJobTypeAction = (jobType) => async(dispatch) => {
    dispatch({ type: CREATE_JOB_TYPE_REQUEST });
    try {
        const { data } = await axios.post('/api/type/create', jobType);
        dispatch({
            type: CREATE_JOB_TYPE_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: CREATE_JOB_TYPE_FAIL,
            payload: error.response.data.error
        });
    }

}

//delete job type action
export const deleteJobTypeAction = (id) => async(dispatch) => {
    dispatch({ type: DELETE_JOB_TYPE_REQUEST });
    try {
        const { data } = await axios.delete(`/api/type/delete/${id}`);
        dispatch({
            type: DELETE_JOB_TYPE_SUCCESS
        });
    } catch(error) {
        dispatch({
            type: DELETE_JOB_TYPE_FAIL,
            payload: error.response.data.error
        });
    }

}