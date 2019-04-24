'use strict';

import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../Dashboard/styles.css';

class SideNavigator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="side-container">
                <label className="heading">MENU</label>
                <div className="menu-container">
                    <Link to="/" className="link-style-two"><button className="menu-button active home">Home</button></Link><br />
                    <Link to="/MainContainer" className="link-style-two"><button className="menu-button dashboard">Dashboard</button></Link><br />
                    <Link to="/Course"><button className="menu-button course">My Courses<label className="badge-copy">New 2</label></button></Link><br />
                    <button className="menu-button assignment">My Assignments</button><br />
                    <button className="menu-button upcoming">Upcomings</button><br />
                    <button className="menu-button due">Due Dates</button><br />
                    <button className="menu-button mail">My Mail</button>
                </div>
                <br />
                <label className="heading">MORE</label>
                <div className="menu-container">
                    <button className="menu-button exam">Examinations<label className="badge-copy">New 3</label></button><br />
                    <button className="menu-button mark">Marks & GPA</button><br />
                    <button className="menu-button switch">Switch User</button>
                </div>
            </div>
        </div>;
    }
}

export default SideNavigator;