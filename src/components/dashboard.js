import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faTachometerAlt,
    faLayerGroup,
    faServer,
    faFileInvoice,
    faChartLine,
    faUserCircle,
    faShekelSign
} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <div className='title'>
                    <p>
                        <FontAwesomeIcon className='shekel' icon={faShekelSign}/>
                        Git Shelf
                    </p>

                    <div className="author">
                    </div>
                </div>
                <div className="profile">
                    <div className="img">
                        <img src={this.props.user && this.props.user.avatar_url} alt={''}/>
                    </div>
                    <div className="par">
                        <div className="name"> {this.props.user.name}</div>
                        <div className="bio"> {this.props.user.type}</div>
                    </div>

                </div>
                <div className="dashboard">
                    <NavLink className="links" to="/dashboard">
                        <FontAwesomeIcon className='font-awesome' icon={faTachometerAlt}/>
                        Dashboard
                    </NavLink>
                    <NavLink className="links" to="/repositories">
                        <FontAwesomeIcon className='font-awesome' icon={faLayerGroup}/>
                        My Repos
                    </NavLink>
                    <NavLink className="links" to="/elements">
                        <FontAwesomeIcon className='font-awesome' icon={faServer}/>
                        UI Elements
                    </NavLink>
                    <NavLink className="links" to="/activity">
                        <FontAwesomeIcon className='font-awesome' icon={faFileInvoice}/>
                        My Activity
                    </NavLink>
                    <NavLink className="links" to="/charts">
                        <FontAwesomeIcon className='font-awesome' icon={faChartLine}/>
                        Charts
                    </NavLink>
                    <NavLink className="links" to="/profile">
                        <FontAwesomeIcon className='font-awesome' icon={faUserCircle}/>
                        Profile
                    </NavLink>
                    {/*<NavLink className="links" to="/">*/}
                    {/*    <FontAwesomeIcon className='font-awesome' icon={faTag}/>*/}
                    {/*    Login*/}
                    {/*</NavLink>*/}
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.info
    }
}
export default connect(mapStateToProps)(SideBar)