
import React from 'react';
import {Link} from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <div className="foot">
                <Link className="footers" to="/">DashBoard</Link>
                <Link  className="footers" to="/about">About Us</Link>
                <Link  className="footers" to="/contact">Contact Us</Link>
            </div>
        )
    }
}
export default Footer;