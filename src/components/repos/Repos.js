import React from 'react'
import RepoItems from './RepoItems'

const Repos = ({ repos }) => {
    return (
        repos.map((repo) => <RepoItems repo={repo} key={repo.id} />)
    )
}

export default Repos
