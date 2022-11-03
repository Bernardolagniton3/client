import axios from 'axios';

import {
    REPORT_ALLREQUEST,
    ALL_REPORT_SUCCESS,
    ALL_REPORT_FAIL,
    CLEAR_ERRORS

} from '../constants/reportConstants'

export const getReports = () => async (dispatch) => {
    try {

        dispatch({ type: REPORT_ALLREQUEST })

        const { data } = await axios.get('http://localhost:8000/report')

        dispatch({
            type: ALL_REPORT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_REPORT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}