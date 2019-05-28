import React from 'react';
import {connect} from 'react-redux';

class RepositoryInfo extends React.Component {
    render() {
        if( typeof this.props.repos !== 'undefined' && this.props.repos.length > 0 ) {
            return this.props.repos.map(repo =>
                <div key= {repo.id} className="repos">
                    <div className="repo">
                        <div className="repo-name">
                            <p>{repo.name}</p>
                        </div>
                        <div className="repo-language">
                            <div className="language-circle">

                            </div>
                            <p>{repo.language}</p>
                        </div>
                    </div>
                </div>)
        }
        else{
            return (
                <div className="no-rep">
                    <p>
                        No Repositories Yet...
                    </p>
                </div>
            )
        }
    }
    }
    const mapStateToProps = (state) => {
    return {
        repos: state.user.repos
    }
}
export default connect(mapStateToProps)(RepositoryInfo)
