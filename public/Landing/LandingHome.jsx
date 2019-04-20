'use strict';

import React, {Component} from 'react';
import '../Landing/styles.css';
import Pic from '../Images/logo.png';

class LandingHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="body-l">
            <div className="l-nav-bar">
                <div className="l-nav-bar-image">
                    <img src={Pic}/>
                </div>
                <div className="l-nav-bar-label">
                    <label>SEIMS</label>
                </div>
                <div className="l-nav-bar-link">
                    <a href="#">COURSES</a>
                    <a href="#">CONTACT US</a>
                    <a href="#">ABOUT US</a>
                    <a href="#">SIGN IN</a>
                </div>
            </div>
            <div className="body-page">

            </div>
        </div>;
    }
}

export default LandingHome;