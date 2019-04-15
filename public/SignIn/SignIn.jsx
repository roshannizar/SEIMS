'use strict';

import React, {Component} from 'react';
import Pic from '../Images/facebook.png';
import Pic1 from '../Images/googleplus.png';
import Pic2 from '../Images/linkedin.png';
import '../SignIn/styles.css';

class SignIn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="back-image">
                <div className="left-container">
                    <div className="logo-container">
                        <label className="logo">SEIMS</label>
                    </div>
                    <div className="logo-container-main">
                        <label className="heading-one">Hello, Companion!</label><br/><br/>
                        <label className="heading-two">No Account?, Create One</label><br/><br/>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <div className="logo-container-footer">
                        <img src={Pic} className="social"/>
                        <img src={Pic1} className="social"/>
                        <img src={Pic2} className="social"/>
                    </div>
                </div>
                <div className="right-container">
                    <div class="badge-container">
                        <label className="badge-one">Welcome Back, Sign In</label>
                    </div>
                    <div className="main">
                        <div className="main-container">
                            <form>
                            <div className="left-form">
                                <label className="form-label left">E-Mail</label>
                                <input type="email" className="text-box" placeholder="Enter E-Mail"/>
                            </div>
                            <div className="right-form">
                                <label className="form-label left">Password</label>
                                <input type="password" className="text-box" placeholder="Enter Password"/>
                            </div>
                            <div className="right-form">
                                <div className="left-form slight-padding">
                                <a href="" className="link-style-signin">Forgot Password?</a>
                                </div>
                                <input type="submit" className="button-submit" value="Login to dashboard"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </div>;
    }
}

export default SignIn;