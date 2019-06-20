import React, { Component } from 'react';
import Announcement from '../notification/Announcement';
import { connect } from 'react-redux';
import { getAnnounce } from '../../actions/announcementActions';
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types';

import Pic from '../../images/gpa.png';
import Pic1 from '../../images/correct.png';
import Pic2 from '../../images/wrong.png';
import '../dashboard/Dstyles.css';

class MainContainer extends Component {

    componentDidMount() {
        this.props.getAnnounce();
    }

    render() {

        const { announces, loading } = this.props.announce;
        let announceItems;

        if (announces === null || loading) {
            announceItems = <Spinner />;
        } else {
            if (announces.length > 0) {
                announceItems = announces.map(announce => (
                    <Announcement key={announce._id} announce={announce} />
                ));
            } else {
                announceItems = <h4>Whoa no announcements!</h4>;
            }
        }

        return (
            <div>
                <label className="heading-slot">Dashboard</label>
                <div className="slot">
                    <div className="slot-sub">
                        <div className="slot-heading">
                            <label className="slot-label">Student Performance</label>
                        </div>
                        <div className="slot-image">
                            <img src={Pic} alt="pic1" />
                            <div className="slot-main slight-slot-main">
                                <label className="slot-main-label-one">Cumulative GPA</label><br /><br />
                                <label className="slot-badge slot-badge-yellow">CGPA: 3.89</label>
                            </div>
                        </div>
                        <div className="slot-image">
                            <img src={Pic1} alt="pic2" />
                            <div className="slot-main">
                                <label className="slot-main-label-one">On-Time Submission</label><br /><br />
                                <label className="slot-badge slot-badge-seagreen">No: 4 of 4</label>
                            </div>
                        </div>
                        <div className="slot-image">
                            <img src={Pic2} alt="pic3" />
                            <div className="slot-main slight-slot-main">
                                <label className="slot-main-label-one">Late Submission</label><br /><br />
                                <label className="slot-badge slot-badge-red">No: 0 of 4</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slot">
                    <div className="slot-sub">
                        <div className="slot-heading">
                            <label className="slot-label">Announcements</label>
                        </div>
                        {announceItems}
                    </div>
                </div>
            </div>
        );
    }
}

MainContainer.propType = {
    getAnnounce: PropTypes.func.isRequired,
    announce: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    announce: state.announce
});

export default connect(mapStateToProps, { getAnnounce })(MainContainer);