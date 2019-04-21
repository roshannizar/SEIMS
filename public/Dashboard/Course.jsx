'use strict';

import React, {Component} from 'react';
import './styles.css';

class Course extends Component {

    constructor() {
        super();

        this.state = {
            showDropDown: true,
            showDropDownOne: false
        }
    }

    render() {

        const styleRadius = {
            borderRadius:'10px'
        }

        const { showDropDown, showDropDownOne } = this.state;

        return <div>
            <div className="course-slot">
                <div className="controls">
                    <button className="controls-btn">View Courses</button>
                    <button className="controls-btn">Un-Enroll</button>
                    <button className="controls-btn">View Assignments</button>
                    <button className="controls-btn">Peek Lecturer</button>
                </div>
                <div className="course-detail">
                    <div className="course-d" onClick={() => this.setState({ showDropDown: !this.state.showDropDown })} style={showDropDown ? {styleRadius} : null }>
                        <label className="course-label">Course Detail</label>
                    </div>
                    { showDropDown ? (
                        <div className="course-detail-sub">
                            <label className="course-detail-sub-label">Hello World</label>
                        </div>
                    ) : null}
                    <div className="course-d" onClick={() => this.setState({ showDropDownOne: !this.state.showDropDownOne })}>
                        <label className="course-label">Other Information</label>
                    </div>
                    { showDropDownOne ? (
                        <div className="course-detail-sub">
                            <label className="course-detail-sub-label">Hello World</label>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>;
    }
 }

 export default Course;