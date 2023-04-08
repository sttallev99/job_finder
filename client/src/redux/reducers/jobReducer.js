export const loadJobReducers = (state={jobs:[]}, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return { loading: true}
        case JOB_LOAD_SUCCESS:
            return { 
                loading: false,
                success: action.payload.success,
                page: action.pauload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocaation: action.payload.setUniqueLocaation,
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