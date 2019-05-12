import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {logout} from '../actions/logoutAction'
class Header extends React.Component{
    onClick=(e)=>{
        e.preventDefault();
        this.props.logout();
        console.log(this.props);
    }
    render(){
        return(
            <div className="head">
                <div className="head-input">
                    <FontAwesomeIcon className='search' icon={faSearch}/>
                    <input type='text' placeholder="Search"/>
                </div>
                <div className="head-link" >
                    <Link className="link"  onClick={this.onClick}>Logout</Link>
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
export default connect(mapStateToProps,{logout})(Header)
