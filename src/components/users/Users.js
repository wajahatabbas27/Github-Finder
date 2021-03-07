import React from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

const Users = ({ users, loading }) => {
    //console.log(users);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users;
