import { 
    CREATE_JOB_FAIL, 
    CREATE_JOB_REQUEST, 
    CREATE_JOB_RESET, 
    CREATE_JOB_SUCCESS, 
    DELETE_JOB_FAIL, 
    DELETE_JOB_REQUEST, 
    DELETE_JOB_RESET, 
    DELETE_JOB_SUCCESS, 
    JOB_LOAD_FAIL, 
    JOB_LOAD_REQUEST, 
    JOB_LOAD_RESET, 
    JOB_LOAD_SINGLE_FAIL, 
    JOB_LOAD_SINGLE_REQUEST, 
    JOB_LOAD_SINGLE_RESET, 
    JOB_LOAD_SINGLE_SUCCESS, 
    JOB_LOAD_SUCCESS 
} from "../constants/jobConstants"

export const loadJobReducers = (state={jobs:[]}, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true}
        case JOB_LOAD_SUCCESS:
            return { 
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
        return { 
            loading: false,
            error: action.payload
        }
        case JOB_LOAD_RESET:
        return {}
        default:
            return state;
    }
}

// single job reducer
export const loadSingleJobReducer = (state= { jobs:{} }, action) => {
    switch (action.type) {
        case JOB_LOAD_SINGLE_REQUEST:
            return { loading: true}
        case JOB_LOAD_SINGLE_SUCCESS:
            return { 
                loading: false,
                success: action.payload.success,
                singleJob: action.payload.job
            }
        case JOB_LOAD_SINGLE_FAIL:
        return { 
            loading: false,
            error: action.payload
        }
        case JOB_LOAD_SINGLE_RESET:
        return {}
        default:
            return state;
    }
}

//create job reducer 
export const createJobReducer = (state = {}, action) => {
    switch(action.type) {
        case CREATE_JOB_REQUEST:
            return { loading: true }
        case CREATE_JOB_SUCCESS:
            return {
                loading: false
            }
        case CREATE_JOB_FAIL:
            return { 
                loading: false,
                error: action.payload 
            }
        case CREATE_JOB_RESET:
            return {}
        default:
            return state;
    }
}

//delete job reducer
export const deleteJobReducer = (state = {}, action) => {
    switch(action.type) {
        case DELETE_JOB_REQUEST:
            return { loading: true }
        case DELETE_JOB_SUCCESS:
            return {
                loading: false
            }
        case DELETE_JOB_FAIL:
            return { 
                loading: false,
                error: action.payload 
            }
        case DELETE_JOB_RESET:
            return {}
        default:
            return state;
    }
}