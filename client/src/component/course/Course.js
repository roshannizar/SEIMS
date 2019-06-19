import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CourseItem from './CourseItem';
import { getCourses } from '../../actions/courseActions';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../dashboard/Dstyles.css';
import MyCourse from './MyCourse';

class Course extends Component {

    constructor() {
        super();

        this.state = {
            showDropDown: true
        }
    }

    componentDidMount() {
        this.props.getCourses();
    }

    RedirectMyCourse() {
        ReactDOM.render(<MyCourse />, document.getElementById('apptwo'));
    }

    render() {

        const { courses, loading } = this.props.course;
        const { showDropDown } = this.state;
        let courseItems;

        if (courses === null || loading) {
            courseItems = <Spinner />;
        } else {
            if (courses.length > 0) {
                courseItems = courses.map(course => (
                    <CourseItem key={course._id} course={course} />
                ));
            } else {
                courseItems = <h4>You haven't enrolled to any course yet</h4>;
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
    getCourses: PropTypes.func.isRequired,
    course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    course: state.course
});

export default withRouter(connect(mapStateToProps, { getCourses })(Course));