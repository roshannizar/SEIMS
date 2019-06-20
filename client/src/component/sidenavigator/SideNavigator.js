import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../dashboard/Dstyles.css';

class SideNavigator extends Component {

    render() {
        return (
            <div>
                <div className="side-container">
                    <label className="heading">NAVIGATION</label>
                    <div className="menu-container">
                        <Link to="/dashboard/home" className="link-style-two"><button className="menu-button active-button home">Home</button></Link><br />
                        <Link to="/dashboard/maincontainer" className="link-style-two"><button className="menu-button dashboard">Dashboard</button></Link><br />
                        <Link to="/dashboard/course" className="link-style-two"><button className="menu-button course">My Courses<label className="badge-copy">New 2</label></button></Link><br />
                        <Link to="/dashboard/assignment" className="link-style-two"><button className="menu-button assignment">My Assignments</button></Link><br />
                        <button className="menu-button upcoming">Upcomings</button><br />
                        <button className="menu-button due">Due Dates</button><br />
                        <button className="menu-button mail">My Mail</button>
                    </div>
                    <div className="slight-top"></div>
                    <label className="heading">MORE</label>
                    <div className="menu-container">
                        <button className="menu-button exam">Examinations<label className="badge-copy">New 3</label></button><br />
                        <button className="menu-button mark">Marks & GPA</button><br />
                        <button className="menu-button switch">Switch User</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideNavigator;