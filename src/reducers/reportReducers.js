import { REPORT_ALLREQUEST, ALL_REPORT_SUCCESS, ALL_REPORT_FAIL, CLEAR_ERRORS } from '../constants/reportConstants'

export const reportsReducer = (state = { reports:[] }, action) => {

    switch (action.type) {

        case REPORT_ALLREQUEST:
            return {
                loading: true,
                reports: []
            }

        case ALL_REPORT_SUCCESS:
            return {
                loading: false,
                reports: action.payload,
                
            }
        case ALL_REPORT_FAIL:
            return {
                loading: false,
                error: action.payload,
                
            }

         case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        default:
        return state;
    } 
 

}

