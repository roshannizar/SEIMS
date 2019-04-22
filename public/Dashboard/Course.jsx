'use strict';

import React, {Component} from 'react';
import MyCourse from './MyCourse';
import ReactDOM from 'react-dom';
import Pic from '../Images/sub1.png';
import './styles.css';

class Course extends Component {

    constructor() {
        super();

        this.state = {
            showDropDown: true,
            showDropDownOne: false
        }
    }

    RedirectCourseP() {
        ReactDOM.render(<MyCourse/>, document.getElementById('app'));
    }

    render() {

        const styleRadius = {
            borderRadius:'10px'
        }

        const { showDropDown, showDropDownOne } = this.state;

        return <div>
            <div className="course-slot">
                <div className="controls">
                    <input type="text" placeholder="search your course here" className="text-box-controls"/>
                    <button className="controls-btn-one">Search</button>
                </div>
                <div className="course-detail">
                    <div className="course-d" onClick={() => this.setState({ showDropDown: !this.state.showDropDown })} style={showDropDown ? {styleRadius} : null }>
                        <label className="course-label">My Course List</label>
                    </div>
                    { showDropDown ? (
                        <div className="course-detail-sub">
                            <div className="course-card">
                                <div className="card-image">
                                    <img src={Pic}/>
                                </div>
                                <label className="course-detail-sub-label">T01: Technology</label>
                                <div className="card-detail">
                                    <label className="card-detail-label">Duration: </label>
                                    <label className="week-badge">4 weeks Left</label><br/><br/>
                                    <label className="card-detail-label">Lecturer: </label>
                                    <label className="lecture-badge">Arun BP</label><br/>
                                </div>
                            </div>
                            <div className="course-card">
                                <div className="card-image">
                                    <img src={Pic}/>
                                </div>
                                <label className="course-detail-sub-label">T15: Programming</label>
                                <div className="card-detail">
                                    <label className="card-detail-label">Duration: </label>
                                    <label className="week-badge">5 weeks Left</label><br/><br/>
                                    <label className="card-detail-label">Lecturer: </label>
                                    <label className="lecture-badge">Arun BP</label><br/>
                                </div>
                            </div>
                            <div className="course-card">
                                <div className="card-image">
                                    <img src={Pic}/>
                                </div>
                                <label className="course-detail-sub-label">T02: Application Framework</label>
                                <div className="card-detail">
                                    <label className="card-detail-label">Duration: </label>
                                    <label className="week-badge">1 weeks Left</label><br/><br/>
                                    <label className="card-detail-label">Lecturer: </label>
                                    <label className="lecture-badge">Arun BP</label><br/>
                                </div>
                            </div>
                            <div className="course-card">
                                <div className="card-image">
                                    <img src={Pic}/>
                                </div>
                                <label className="course-detail-sub-label">T05: English</label>
                                <div className="card-detail">
                                    <label className="card-detail-label">Duration: </label>
                                    <label className="week-badge">3 weeks Left</label><br/><br/>
                                    <label className="card-detail-label">Lecturer: </label>
                                    <label className="lecture-badge">Arun BP</label><br/>
                                </div>
                            </div>
                            <div className="course-card">
                                <div className="card-image">
                                    <img src={Pic}/>
                                </div>
                                <label className="course-detail-sub-label">RS09: Architecture</label>
                                <div className="card-detail">
                                    <label className="card-detail-label">Duration: </label>
                                    <label className="week-badge">3 weeks Left</label><br/><br/>
                                    <label className="card-detail-label">Lecturer: </label>
                                    <label className="lecture-badge">Arun BP</label><br/>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>;
    }
 }

 export default Course;