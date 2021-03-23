import React, { useReducer } from 'react'
import alertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {

    const initialState = null;

    //Display alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        })
        //Remove the alert message after 5s
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);




    return (

        <alertContext.Provider value={{
            alert: state,
            setAlert
        }}>
            {props.children}
        </alertContext.Provider>
    )
}

export default AlertState
