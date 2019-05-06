import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Modal from 'react-awesome-modal';

import Pic from '../../images/logo.png';
import Pic1 from '../../images/person.png';
import SideNavigator from '../sidenavigator/SideNavigator';
import Course from '../course/Course';
import MainContainer from '../maincontainer/MainContainer';
import Home from '../home/Home';
import NotFound from '../notfound/NotFoundComp';
import './Dstyles.css';
import MyCourse from '../course/MyCourse';

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
        return (
            <div>
                <div className="nav-bar">
                    <div className="nav-bar-logo">
                        <img src={Pic} className="logo-image" />
                        <label className="nav-bar-label">SEIMS</label>
                    </div>
                    <div className="nav-bar-link">
                        <a href="#" className="link-style">Settings</a>
                        <div className="dropdown">
                            <a href="#" className="link-style">Profile</a>
                            <div className="dropdown-content">
                                <div className="drop-label-div">
                                    <label className="drop-label">Profile<label className="badge">New 18</label></label>
                                </div>
                                <a href="#">John Smith</a>
                                <a href="">Recover Password</a>
                                <a href="#" onClick={() => this.openModal()}>Notifications<label className="badge secondary">New 18</label></a>
                                <a href="#" className="slight-border" onClick={() => { this.RedirectSignIn() }}>Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sub-menu">
                    <div className="sub-menu-sub left">
                        <label className="sub-menu-label">Hi John Smith</label>
                    </div>
                    <div className="sub-menu-sub right slight-padding-right">
                        <label className="breadcrumb">Home/ Student Dashboard</label>
                    </div>
                </div>

                <Router>
                    <SideNavigator />
                    <div className="board" id="apptwo">
                        <div>
                            <Switch>
                                <Home/>
                                <Route exact path="/dashboard/home" component={Home} />
                                <Route exact path="/dashboard/maincontainer" component={MainContainer} />
                                <Route exact path="/dashboard/course" component={Course} />
                                <Route exact patch="/dashboard/course/mycourse" component={MyCourse}/>
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>

                <Modal className="trans" visible={this.state.visible} width="100%" height="100%" effect="fadeInRight" onClickAway={() => this.closeModal()}>
                    <div className="modal">
                        <div className="noti-title" onClick={() => this.closeModal()}>
                            <h1>Notifications</h1>
                        </div>
                        <hr />
                        <div className="noti-content">
                            <img src={Pic1} className="person-img" />
                            <label className="noti-badge">Anounymous</label>
                            <label className="date-badge">2019/04/09</label>
                            <div className="noti-cont">
                                <label>An Assignment for Distrbuted system, deadline has been extended.</label>
                            </div>
                        </div>
                        <div className="noti-content">
                            <div className="noti-slot">
                                <img src={Pic1} />
                                <label className="noti-badge">Anounymous</label>
                                <label className="date-badge">2019/04/09</label>
                                <div className="noti-cont">
                                    <label>New Assignment as been uploaded for Software Architecture. check now</label>
                                </div>
                            </div>
                        </div>
                        <div className="noti-content">
                            <div className="noti-slot">
                                <img src={Pic1} />
                                <label className="noti-badge">Anounymous</label>
                                <label className="date-badge">2019/04/09</label>
                                <div className="noti-cont">
                                    <label>New Assignment as been uploaded for Software Architecture. check now</label>
                                </div>
                            </div>
                        </div>
                        <div className="noti-content">
                            <div className="noti-slot">
                                <img src={Pic1} />
                                <label className="noti-badge">Anounymous</label>
                                <label className="date-badge">2019/04/09</label>
                                <div className="noti-cont">
                                    <label>New Assignment as been uploaded for Software Architecture. check now</label>
                                </div>
                            </div>
                        </div>
                        <div className="noti-content">
                            <div className="noti-slot">
                                <img src={Pic1} />
                                <label className="noti-badge">Anounymous</label>
                                <label className="date-badge">2019/04/09</label>
                                <div className="noti-cont">
                                    <label>New Assignment as been uploaded for Software Architecture. check now</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div >
        );
    }
}

export default Dashboard;