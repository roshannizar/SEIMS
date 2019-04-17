'use strict';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Pic from '../Images/logo.png';

import SideNavigator from './SideNavigator';
import Container from './Container';
import '../Dashboard/styles.css';
import Modal from 'react-awesome-modal';
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return <div>
            <div className="nav-bar">
                <div className="nav-bar-logo">
                    <img src={Pic} className="logo-image"/>
                    <label className="nav-bar-label">SEIMS</label>
                </div>
                <div className="nav-bar-link">
                    <a href="#" className="link-style"  onClick={() => this.openModal()}>Settings</a>
                    <div className="dropdown">
                    <a href="" className="link-style">Profile</a>
                        <div className="dropdown-content">
                            <div className="drop-label-div">
                                <label className="drop-label">Profile<label className="badge">New 18</label></label>
                            </div>
                            <a href="#">John Smith</a>
                            <a href="">Recover Password</a>
                            <a href="#">Notifications<label className="badge secondary">New 18</label></a>
                            <a href="#" className="slight-border">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-menu">
                <div className="sub-menu-sub left">
                    <label className="sub-menu-label">Hi John Smith, welcome check your dashboard.</label>
                </div>
                <div className="sub-menu-sub right slight-padding-right">
                    <label className="breadcrumb">Home/ Student Dashboard</label>
                </div>
            </div>

            {/* Student Side Navigator */}
            <SideNavigator/>

            {/* Student Main Container */}
            <div className="board">
                <Container/>
            </div>
            <Modal className="trans" visible={this.state.visible} width="100%" height="100%" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                <div className="modal">
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                </div>
            </Modal>
        </div>;
    }
}

export default Dashboard;