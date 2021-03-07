import React from 'react'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="Profile" className="round-img" style={{ width: "60px" }} />
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-dark btn-sm my-1">Profile</a>
        </div>
    )
}

export default UserItem