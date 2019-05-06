import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Course from '../course/Course';
import MainContainer from '../maincontainer/MainContainer';
import Home from '../home/Home';
import NotFoundComponent from '../notfound/NotFoundComp';
import '../dashboard/Dstyles.css';

class SideNavigator extends Component {

    RedirectToHome() {
        ReactDOM.render(<Home/>, document.getElementById('apptwo'));
    }

    RedirectToDashboard() {
        ReactDOM.render(<MainContainer/>, document.getElementById('apptwo'));
    }

    RedirectToCourse() {
        ReactDOM.render(<Course/>, document.getElementById('apptwo'));
    }

    RedirectToAssignment() {
        ReactDOM.render(<NotFoundComponent/>, document.getElementById('apptwo'));
    }

    render() {
        return (
            <div>
                <div className="side-container">
                    <label className="heading">MENU</label>
                    <div className="menu-container">
                        <Link to="/dashboard/home" className="link-style-two"><button className="menu-button active-button home" onClick={() => { this.RedirectToHome() }}>Home</button></Link><br />
                        <Link to="/dashboard/maincontainer" className="link-style-two"><button className="menu-button dashboard" onClick={() => { this.RedirectToDashboard() }}>Dashboard</button></Link><br />
                        <Link to="/dashboard/course" className="link-style-two"><button className="menu-button course" onClick={() => { this.RedirectToCourse() }}>My Courses<label className="badge-copy">New 2</label></button></Link><br />
                        <Link to="/dashboard/assignment" className="link-style-two"><button className="menu-button assignment" onClick={() => { this.RedirectToAssignment() }}>My Assignments</button></Link><br />
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
            </div>
        );
    }
}

export default SideNavigator;