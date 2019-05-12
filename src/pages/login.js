import React from 'react';
import {connect} from "react-redux";
import {showUser} from "../actions/userAction";

class Login extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.showUser(this.refs.username.value);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="login-container">

                <div className="left-part">
                    <div className="paragraph">
                        <p>Welcome to your GitHub organizer</p>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div className="username">
                            <label>Enter your github username</label>
                            <input type="text" ref="username" placeholder="Username"/>
                        </div>
                        <div className="btn">
                            <button>PROCEED</button>
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
        user: state.users.user
    }
}
export default connect(mapStateToProps,{showUser})(Login)