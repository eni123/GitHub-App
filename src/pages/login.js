import React from 'react';
import LoginForm from '../components/loginForm';

class Login extends React.Component{
    render(){
        return(
            <div className="login-container">

                 <div className="left-part">
                     <div className="paragraph">
                         <p>Welcome to your GitHub organizer</p>
                     </div>
                     <LoginForm/>
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
export default Login