import React from 'react';
import {connect} from "react-redux";
import {showUser} from "../actions/userAction";

class LoginForm extends React.Component{
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.showUser(this.refs.username.value);
    }
     render() {
         console.log(this.props)
        return(
    <form onSubmit={this.onSubmit}>
        <div className="username">
            <label>Enter your github username</label>
            <input type="text" ref="username" placeholder="Username"/>
        </div>

        <div className="btn">
            <button>PROCEED</button>
        </div>
    </form>

    )
    }}
const mapStateToProps = (state) => {
    return {
        user: state.users.user
    }
}
export default connect(mapStateToProps,{showUser})(LoginForm)
