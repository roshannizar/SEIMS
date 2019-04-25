'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Course from './Course';
import './styles.css';

class MyCourse extends Component {

    constructor(props) {
        super(props);
    }

    RedirectCourse() {
        ReactDOM.render(<Course/>, document.getElementById('apptwo'));
    }

    render() {
        return <div>
            <label className="heading-slot">My Course - T01: Technology</label>
            <div className="course-detail">
                <div className="controls">
                    <button className="controls-btn" onClick={() => {this.RedirectCourse()}}>Back</button>
                    <button className="controls-btn">Un-Enroll</button>
                    <button className="controls-btn">View Assignments</button>
                    <button className="controls-btn">Peek Lecturer</button>
                </div>
            </div>
        </div>;
    }
}

export default MyCourse;