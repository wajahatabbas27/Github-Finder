import React, { useContext, useState } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { searchUsers, users, clearUsers } = githubContext;
    const { setAlert } = alertContext;

    const [text, setText] = useState('');


    //onChange event handler use kra hai jb value change ho to
    const onChange = e => setText(e.target.value);

    //onSubmit event handler use kra hai jb submit kreinge hm form
    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please Enter a username', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>

            {/*Jb kuch ho to clear button show krae wrna nhi */}
            {users.length > 0 && (
                <button onClick={clearUsers} className="btn btn-light btn-block">Clear</button>
            )}
        </div>
    )
}

export default Search
