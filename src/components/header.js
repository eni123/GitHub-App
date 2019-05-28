import React from 'react';
import {Link, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {logout} from '../actions/logoutAction'
class Header extends React.Component{
    isEmpty = (user) => {
        for (let k in user) {
            if (user.hasOwnProperty(k))
                return false;
        }
        return true;
    }
    onClick=(e)=>{
        e.preventDefault();
        this.props.logout();
    }
    render(){
        if (this.isEmpty(this.props.user))
            return <Redirect to={'/'}/>
        return(
            <div className="head">
                <div className="head-input">
                    <FontAwesomeIcon className='search' icon={faSearch}/>
                    <input type='text' placeholder="Search"/>
                </div>
                <div className="head-link" >
                    <Link className="link" to="/" onClick={this.onClick}>Logout</Link>
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
export default connect(mapStateToProps,{logout})(Header)
