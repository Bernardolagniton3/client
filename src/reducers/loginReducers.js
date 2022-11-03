import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstanst'

export const logReducer = (state = {otp: {} }, action) => {

     switch (action.type) {

        case LOGIN_REQUEST:
            return {
                loading:true,
                isAuthenticated:false
            }
         case LOGIN_SUCCESS:   
            return {
                ...state,
                loading:false,
                isAuthenticated:true,
                otp:action.payload
            } 
            case LOGIN_FAIL:
            return {
                ...state,
                loading:false,
                isAuthenticated:false,
                otp:null,
                error: action.payload
            }
            case CLEAR_ERRORS:
            return {
                ...state,
                 error: null
            }  
            default:
                return state;
     }

}