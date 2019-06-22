import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CourseItem from './CourseItem';
import { getCourseSelected } from '../../actions/courseActions';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../dashboard/Dstyles.css';
import MyCourse from './MyCourse';

class Course extends Component {

    constructor() {
        super();

        this.state = {
            showDropDown: true,
            user_id: '5ccc5e8dd8876a3a30176a80'
        }
    }

    componentDidMount() {
        if (this.state.user_id) {
            this.props.getCourseSelected(this.state.user_id);
        }
    }

    RedirectMyCourse() {
        ReactDOM.render(<MyCourse />, document.getElementById('apptwo'));
    }

    render() {

        const { course, loading } = this.props.course;
        const { showDropDown } = this.state;
        let courseItems;

        if (course === null || loading || Object.keys(course).length === 0) {
            courseItems = <Spinner />;
        } else {
            if (course.length > 0) {
                courseItems = course.map((value, index) => (
                    <CourseItem key={index} course={value} />
                ));
            } else {
                courseItems = <h4>You haven't enrolled to any courses yet</h4>;
            }
        }

        return (
            <div>
                <div className="course-slot">
                    <label className="heading-slot">My Courses</label>
                    <div className="controls">
                        <input type="text" placeholder="Search your course here" className="text-box-controls" />
                        <button className="controls-btn-one">Search</button>
                    </div>
                    <div className="course-detail">
                        <div className="course-d" onClick={() => this.setState({ showDropDown: !this.state.showDropDown })}>
                            <label className="course-label">My Course List</label>
                        </div>
                        {showDropDown ? (
                            <div className="course-detail-sub">
                                {courseItems}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

Course.propTypes = {
    getCourseSelected: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    course: state.course
});

export default connect(mapStateToProps, { getCourseSelected })(withRouter(Course));