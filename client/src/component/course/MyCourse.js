import React, { Component } from 'react';
import CourseItem from './CourseItem';
import PropTypes from 'prop-types';

import '../dashboard/Dstyles.css';

class MyCourse extends Component {

    render() {
       const { course } = this.props;

       return course.map(courses => (
        <CourseItem key={courses._id} course={courses}/>
       ));
    }
}

MyCourse.propTypes = {
    course: PropTypes.array.isRequired
};

export default MyCourse;