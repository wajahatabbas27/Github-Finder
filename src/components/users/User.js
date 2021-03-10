import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {

    useEffect(() => {
        //data bhejrhe hain functions mein jo destructure kre hain take api call krein app.js mein.
        //match bhi destructure kra hai yh {...props} se arha hai
        getUser(match.params.login);
        getUserRepos(match.params.login);

    }, []);

    //destructure krlie hain api se yh sari chezein hmne jo use krni hain.
    const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;

    if (loading) return <Spinner />;

    return (
        <>
            <Link to="/" className="btn btn-light">Back to Search Results</Link>
            Hireable: {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}

            <div className="card grid-2">

                <div className="all-center">
                    <img src={avatar_url} alt="Profile" className="round-img" style={{ width: '150px' }} />
                    <h2>{name}</h2>
                    {location && (
                        <>
                            <h5>location: {location}</h5>
                        </>
                    )}
                </div>

                <div>
                    {bio && (
                        <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>
                    )}

                    <a href={html_url} className="btn btn-dark my-1" target="_blank" rel="noreferrer">Github Profile</a>

                    <ul>
                        <li>
                            {login && (
                                <>
                                    Username: {login}
                                </>
                            )}
                        </li>
                        <li>
                            {company && (
                                <>
                                    company: {company}
                                </>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <>
                                    Website: {blog}
                                </>
                            )}
                        </li>
                    </ul>
                </div>

            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </>
    )
}

export default User
