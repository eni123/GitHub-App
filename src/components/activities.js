import React from 'react';
import {connect} from "react-redux";

class Activities extends React.Component{
    render(){
        //if( typeof this.props.events !== 'undefined'  && this.props.events.length > 0 && this.props.events){
        return <div className="activities">{typeof this.props.events !== 'undefined'  && this.props.events.length > 0 && this.props.events && this.props.events.slice(0,12).map(event =>
            <div key={event.id} className="activity">
               <div className="design">
                   <div className="line"> </div>
                   <div className="circle"> </div>
                   <div className="line"> </div>
               </div>
                <div className="created-time"><p>{event.created_at}</p></div>
                <div className="activity-type"><p>{event.type}</p></div>
            </div>)}
        </div>

    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.info,
        events:state.user.events
    }
}
export default connect(mapStateToProps)(Activities)