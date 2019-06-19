import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pic from '../../images/sub1.png';
import '../dashboard/Dstyles.css';

class CourseItem extends Component {

    render() {

        const { course } = this.props;

        return (
            <div className="course-card">
                <div className="card-image">
                    <img src={Pic} alt="pic" />
                </div>
                <label className="course-detail-sub-label">{course.cid}: {course.cname}</label>
                <div className="card-detail">
                    <label className="card-detail-label">Duration: </label>
                    <label className="week-badge">{course.cduration} weeks Left</label><br /><br />
                    <label className="card-detail-label">Lecturer: </label>
                    <label className="lecture-badge">{course.cassignee}</label><br /><br />
                    <label className="card-detail-label">Assignments: </label>
                    <label className="assign-badge">4 of 7</label><br />
                    <button className="card-controls-btn" onClick={() => { this.RedirectMyCourse() }}>View</button>
                    <button className="card-controls-btn">En-Enroll</button>
                </div>
            </div>
        );
    }
}

CourseItem.propType = {
    course: PropTypes.object.isRequired
};

export default CourseItem;