import React from 'react';
import RepositoryInfo from "../components/repositoryInfo";
import {connect} from "react-redux";
import {showUser} from "../actions/userAction";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye} from '@fortawesome/free-solid-svg-icons'

class Dashboard extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="details">
                        <div className="location">
                            <p>Home / <Link className="link" to="/">DashBoard</Link></p>
                        </div>
                        <div className="welcome">
                            <h4>Hi</h4><p>{this.props.user.name}</p><h4>, Welcome Back!</h4>
                        </div>
                        <div className="git-manager">
                            <p> My git manager</p>
                        </div>
                    </div>
                    <div className="side-followers">

                    </div>
                </div>
                <div className="dashboard-footer">
                    <div className="general-info">
                        <div className="rep-stars">
                            <div className="repositories">
                                <FontAwesomeIcon className='eye' icon={faEye}/>
                                <p>

                                </p>
                            </div>
                            <div className="stars">

                            </div>
                        </div>
                        <div className="follow">
                            <div className="followers">

                            </div>
                            <div className="following">

                            </div>
                        </div>
                        <div className="organization">

                        </div>
                    </div>
                    <div className="issues">
                        <div className="center-issues">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users.user
    }
}
export default connect(mapStateToProps, {showUser})(Dashboard)