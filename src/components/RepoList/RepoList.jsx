import React from 'react'
import Repo from './Repo/Repo'

const RepoList = (props) => {
    const result = props.repos.map((item, key) => <Repo key={item.id} rank={key + 1} item={item} />)
    return <div className="row mt-4">{result}</div>
}

export default RepoList