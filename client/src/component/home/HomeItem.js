import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCourse } from '../../actions/courseActions';

import Pic from '../../images/sub1.png';
import '../dashboard/Dstyles.css';

class HomeItem extends Component {


    onCourseClick(id, courseid) {
        this.props.setCourse(id, courseid);
    }

    render() {

        const { course } = this.props;
        const { user } = this.props.auth;

        return (
            <div className="home-sub-level">
                <div className="home-image">
                    <img src={Pic} alt="pic" />
                </div>
                <div className="home-image-sub">
                    <label className="home-image-sub-label">{course.cname}</label>
                    <br /><br />
                    <label className="home-image-sub-label-two">{course.cdescription}</label>
                    <br /><br />
                    <label className="rating-badge">Rating 4/5</label>
                    <label className="lecture-badge">{course.cassignee}</label><br /><br />
                    <label className="week-badge">Duration: {course.cduration}</label><br /><br />
                    <button className="home-image-button" onClick={this.onCourseClick.bind(this, user.id, course._id)}>Enroll</button>
                </div>
            </div>
        );
    }
}

HomeItem.propTypes = {
    course: PropTypes.object.isRequired,
    setCourse: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setCourse })(HomeItem);