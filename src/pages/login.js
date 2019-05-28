import React from 'react';
import {connect} from "react-redux";
import {showUser} from "../actions/userAction";
import {Redirect} from "react-router";
//import {TOGGLE_LOADING} from "../actions/types";
//import {toggleLoading} from '../actions/loadingAction'
// import {showRep} from "../actions/repoAction";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: 'PROCEED'
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        //toggleLoading(true);
        const username = this.refs.username.value
        if (username && username.trim().length > 0 && !username.trim().includes(' '))
         this.props.showUser(username);
        this.setState({loading: 'PROCEEDING'})
    }
    isEmpty = (user) => {
        for (let k in user) {
            if (user.hasOwnProperty(k))
                return false;
        }
        return true;
    }

    render() {
        if (this.props.user && this.props.user.login && !this.isEmpty(this.props.user))
            return <Redirect to={'/dashboard'}/>;

        return (
            <div className="login-container">
                <div className="left-part">
                    <div className="paragraph">
                        <p>Welcome to your GitHub organizer</p>
                    </div>
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <div className="username">
                            <label>Enter your github username</label>
                            <input type="text" ref="username" placeholder="Username"/>
                        </div>
                        <div className="btn">
                            <button>{this.state.loading}</button>
                        </div>
                    </form>
                </div>
                <div className="right-part">
                    <div className="par">
                        <h2>
                            Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aspernatur
                        </h2>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aspernatur
                            dignissimos esse nisi sunt unde. Atque debitis earum eos

                        </p>
                    </div>
                    <div>
                        <button>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.info
    }
};
export default connect(mapStateToProps, {showUser})(Login)