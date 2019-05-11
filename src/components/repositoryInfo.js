import {connect} from 'react-redux';
import {showRep} from "../actions/repoAction";
import React from 'react';
class RepositoryInfo extends React.Component{
    render(){
        return <div>{this.props.repos.bio}</div>
     }

}
const mapStateToProps = (state) => {
    return {
        repos: state.repos.repos
    }
}
export default connect(mapStateToProps,{showRep})(RepositoryInfo)
