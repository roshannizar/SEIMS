import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pic from '../../images/sub1.png';
import '../dashboard/Dstyles.css';

class HomeItem extends Component {

    render() {

        const { course } = this.props;

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
                    <button className="home-image-button">View</button>
                </div>
            </div>
        );
    }
}

HomeItem.propType = {
    course: PropTypes.object.isRequired
};

export default HomeItem;