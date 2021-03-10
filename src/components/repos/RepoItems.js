import React from 'react'

const RepoItems = ({ repo }) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
            </h3>
        </div>
    )
}

export default RepoItems;
