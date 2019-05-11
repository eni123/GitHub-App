import React from 'react';
import ProfileComponent from "../components/profileComponent";

class Profile extends React.Component{
    render(){
        return(
            <div>
                <h1>Profile</h1>
                <ProfileComponent/>
            </div>
        )
    }
}
export default Profile