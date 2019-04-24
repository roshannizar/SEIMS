'use strict';

import React, { Component } from 'react';
import './styles.css';

class MyCourse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="course-detail">
                <div className="controls">
                    <button className="controls-btn">View Courses</button>
                    <button className="controls-btn">Un-Enroll</button>
                    <button className="controls-btn">View Assignments</button>
                    <button className="controls-btn">Peek Lecturer</button>
                </div>
            </div>
        </div>;
    }
}

export default MyCourse;