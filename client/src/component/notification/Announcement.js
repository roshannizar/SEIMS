import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../dashboard/Dstyles.css';

class Announcement extends Component {
    render() {

        const { announce } = this.props;

        return(
            <div className="noti-card">
                <label className="noti-label-bold">{announce.subject}</label>
                <br/><br/>
                <label className="noti-label">{announce.description}</label><br/><br/>
                <label className="badge secondary slight-margin-right">Posted On: {announce.date}</label>
                <label className="left badge secondary slight-margin-right">Posted By: {announce.submittedBy}</label>
                <br/><br/>
                <hr/>
            </div>
        );
    }
}

Announcement.propTypes = {
    announce: PropTypes.object.isRequired
};

export default Announcement;