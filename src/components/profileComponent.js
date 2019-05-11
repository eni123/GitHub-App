import React from 'react';
import {connect} from 'react-redux';
import {showUser} from '../actions/userAction';

class ProfileComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.user.login}<br/>
                    {this.props.user.id}<br/>
                    {this.props.user.followers}<br/>
                    <img src={this.props.user.avatar_url}/>
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
export default connect(mapStateToProps,{showUser})(ProfileComponent)