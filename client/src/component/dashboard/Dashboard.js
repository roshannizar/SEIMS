/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import PropTypes from 'prop-types';

import Pic from '../../images/logo.png';
import SideNavigator from '../sidenavigator/SideNavigator';
import Course from '../course/Course';
import MainContainer from '../maincontainer/MainContainer';
import Home from '../home/Home';
import NotFound from '../notfound/NotFoundComp';
import MyCourse from '../course/MyCourse';
import Notification from '../notification/Notification';
import './Dstyles.css';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
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
        const { isAuthenticated, user } = this.props.auth;
        const authLink = (<label> {user.fname} {user.lname}</label>);
        const guestLink = ('user, you\'re not logged in');
        return (
            <div>
                <div className="nav-bar">
                    <div className="nav-bar-logo">
                        <img src={Pic} className="logo-image" alt="logo" />
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
                                <a href="#">Hi {isAuthenticated ? authLink : guestLink }</a>
                                <a href="">Recover Password</a>
                                <a href="#" onClick={() => this.openModal()}>Notifications<label className="badge secondary">New 18</label></a>
                                <a href="#" className="slight-border" onClick={this.onLogoutClick.bind(this)}>Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sub-menu">
                    <div className="sub-menu-sub left">
                        <label className="sub-menu-label">Hi {isAuthenticated ? authLink : guestLink }</label>
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
                                <Home />
                                <Route exact path="/dashboard/home" component={Home} />
                                <Route exact path="/dashboard/maincontainer" component={MainContainer} />
                                <Route exact path="/dashboard/course" component={Course} />
                                <Route exact patch="/dashboard/course/mycourse" component={MyCourse} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>

                <Modal className="trans" visible={this.state.visible} width="100%" height="100%" effect="fadeInRight" onClick={() => this.closeModal()}>
                    <Notification/>
                </Modal>
            </div >
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps, { logoutUser })(Dashboard);