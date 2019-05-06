'use strict';

import React, { Component } from 'react';
import Pic from '../Images/gpa.png';
import Pic1 from '../Images/correct.png';
import Pic2 from '../Images/wrong.png';
import './styles.css';

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <label className="heading-slot">Dashboard</label>
            <div className="slot">
                <div className="slot-sub">
                    <div className="slot-heading">
                        <label className="slot-label">Student Performance</label>
                    </div>
                    <div className="slot-image">
                        <img src={Pic} />
                        <div className="slot-main slight-slot-main">
                            <label className="slot-main-label-one">Cumulative GPA</label><br /><br />
                            <label className="slot-badge slot-badge-yellow">CGPA: 3.89</label>
                        </div>
                    </div>
                    <div className="slot-image">
                        <img src={Pic1} />
                        <div className="slot-main">
                            <label className="slot-main-label-one">On-Time Submission</label><br /><br />
                            <label className="slot-badge slot-badge-seagreen">No: 4 of 4</label>
                        </div>
                    </div>
                    <div className="slot-image">
                        <img src={Pic2} />
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
                    <br /><br />
                </div>
            </div>
        </div>;
    }
}

export default MainContainer;