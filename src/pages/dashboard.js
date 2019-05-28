import React from 'react';
//import RepositoryInfo from "../components/repositoryInfo";
import {connect} from "react-redux";
//import {showUser} from "../actions/userAction";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye,faArrowUp,faArrowDown,faCommentDollar,faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import Activities from '../components/activities';
import Organisations from '../components/organizations'

class Dashboard extends React.Component {
    //componentDidUpdate() {
    //         console.log('user', this.props.user)
    //         const cook=this.props.user;
    //         this.props.cookies.set('userInfo',cook,{ path: '/' });
    //      }
     render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div className="details">
                        <div className="location">
                            <p>Home / <Link className="link" to="/dashboard">DashBoard</Link></p>
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
                                <div className="icon"><FontAwesomeIcon className='eye' icon={faEye}/></div>
                                <div className="state">
                                    <div className="arrow-div">
                                        <div className="arr"><FontAwesomeIcon className='arrow' icon={faArrowUp}/></div>
                                        <div className="no"><p>{this.props.user.public_repos}</p></div>
                                    </div>
                                    <div className="prop-div"><p>REPOSITORIES</p></div>
                                </div>
                            </div>
                            <div className="stars">
                                <div className="icon"><FontAwesomeIcon className='eye' icon={faCommentDollar}/></div>
                                <div className="state">
                                    <div className="arrow-div">
                                        <div className="arr"><FontAwesomeIcon className='arrow' icon={faArrowDown}/></div>
                                        <div className="no"><p>{this.props.user.public_repos}</p></div>
                                    </div>
                                    <div className="prop-div"><p>STARS</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="follow">
                            <div className="followers">
                                <div className="icon"><FontAwesomeIcon className='eye' icon={faVolumeUp}/></div>
                                <div className="state">
                                    <div className="arrow-div">
                                        <div className="arr"><FontAwesomeIcon className='arrow' icon={faArrowUp}/></div>
                                        <div className="no"><p>{this.props.user.followers}</p></div>
                                    </div>
                                    <div className="prop-div"><p>FOLLOWERS</p></div>
                                </div>
                            </div>
                            <div className="following">
                                <div className="icon"><FontAwesomeIcon className='eye' icon={faVolumeUp}/></div>
                                <div className="state">
                                    <div className="arrow-div">
                                        <div className="arr"><FontAwesomeIcon className='arrow' icon={faArrowUp}/></div>
                                        <div className="no"><p>{this.props.user.following}</p></div>
                                    </div>
                                    <div className="prop-div"><p>FOLLOWING</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="organization">
                           <div className="org-header">
                               <p>Personal Organizations</p>
                           </div>
                            <Organisations/>
                        </div>
                    </div>
                    <div className="issues">
                        <div className="issues-title">
                            <p>Open Issues</p>
                        </div>
                        <Activities/>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.info,
        //events:state.user.events,
        //orgs:state.user.orgs
    }
}
export default connect(mapStateToProps)(Dashboard)