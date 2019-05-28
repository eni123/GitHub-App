import React from 'react';
import RepositoryInfo from '../components/repositoryInfo'

class Repositories extends React.Component{
    //componentWillMount() {
    //         // TODO: get repos data
    //     }

    render(){
        return(
            <div className="repository-page">
                <div className="page-title">
                    <input type="text" placeholder="Find a repository..."/>
                    <button>New</button>
                </div>
                <RepositoryInfo/>
            </div>
        )
    }
}
export default Repositories