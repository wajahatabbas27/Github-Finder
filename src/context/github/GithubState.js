import React, { useReducer } from 'react'
import githubContext from './githubContext';
import GithubReducer from './githubReducer';

const GithubState = (props) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users
    //get user
    //clear users
    //get repos
    //set loading


    return (
        <githubContext.Provider value={{ users: state.users, user: state.user, repos: state.repos, loading: state.loading }}>
            {props.children}
        </githubContext.Provider>
    )
}

export default GithubState
