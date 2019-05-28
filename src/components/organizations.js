import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {connect} from 'react-redux';

class Organisations extends React.Component {
    render() {
        return <div className="all-org">
            {typeof this.props.orgs !== 'undefined' && this.props.orgs.length>0 && this.props.orgs && this.props.orgs.map(org =>
                <div key={org.id} className="org">
                    <div className="org-icon">
                        <FontAwesomeIcon className='eye' icon={faVolumeUp}/>
                    </div>
                    <div className="org-title">
                        <p>{org.login}</p>
                    </div>
                </div>)}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.info,
        orgs: state.user.orgs
    }
}
export default connect(mapStateToProps)(Organisations)
