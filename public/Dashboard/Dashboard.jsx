'use strict';

import React, {Component} from 'react';
import Pic from '../Images/logo.png';
import Pic1 from '../Images/home.png';
import SideNavigator from './SideNavigator';
import MainContainer from './MainContainer';
import '../Dashboard/styles.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="nav-bar">
                <div className="nav-bar-logo">
                    <img src={Pic} className="logo-image"/>
                    <label className="nav-bar-label">SEIMS</label>
                </div>
                <div class="nav-bar-link">
                    <a href="" className="link-style">Settings</a>
                    <div className="dropdown">
                    <a href="" className="link-style">Profile</a>
                        <div class="dropdown-content">
                            <div className="drop-label-div">
                                <label className="drop-label">Profile<label className="badge">New 18</label></label>
                            </div>
                            <a href="#">John Smith</a>
                            <a href="">Recover Password</a>
                            <a href="#">Notifications <label className="badge secondary">New 18</label></a>
                            <a href="#">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-menu">
                <div className="sub-menu-sub left">
                    <label className="sub-menu-label">Student Dashboard</label>
                </div>
                <div className="sub-menu-sub right slight-padding-right">
                    <label className="breadcrumb">Home/ Student Dashboard</label>
                </div>
            </div>

            {/* Side Navigator */}
            <SideNavigator/>

            {/* Main Container */}
            <div className="board">
                <MainContainer/>
            </div>
        </div>;
    }
}

export default Dashboard;