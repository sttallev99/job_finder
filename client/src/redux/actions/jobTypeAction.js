import axios from 'axios';
import { CREATE_JOB_TYPE_FAIL, CREATE_JOB_TYPE_REQUEST, CREATE_JOB_TYPE_SUCCESS, JOB_TYPE_LOAD_FAIL, JOB_TYPE_LOAD_REQUEST, JOB_TYPE_LOAD_SUCCESS } from '../constants/jobConstants';

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