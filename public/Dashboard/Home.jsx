'use strict';

import React, {Component} from 'react';
import Pic from '../Images/sub1.png';
import Pic1 from '../Images/sub2.png';
import Pic2 from '../Images/sub3.png';
import './styles.css';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <div className="home-slot home-sub">
                <div className="home-label">
                    <label>New</label>
                    <label className="navigate-view">View All</label>
                </div>
                <div className="home-sub-level">
                    <div className="home-image">
                        <img src={Pic}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic1}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic2}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
            </div>
            <div className="home-slot home-sub">
                <div className="home-label">
                    <label>Most Rated</label>
                    <label className="navigate-view">View All</label>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic1}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic2}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
            </div>
            <div className="home-slot home-sub">
                <div className="home-label">
                    <label>Most Viewed</label>
                    <label className="navigate-view">View All</label>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic1}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
            </div>
            <div className="home-slot home-sub">
                <div className="home-label">
                    <label>All Course</label>
                    <label className="navigate-view">View All</label>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic2}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
                <div className="home-sub-level">
                <div className="home-image">
                        <img src={Pic1}/>
                    </div>
                    <div className="home-image-sub">
                        <label className="home-image-sub-label">Technology</label>
                        <br/><br/>
                        <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                        <br/><br/>
                        <label className="rating-badge">Rating 4/5</label>
                        <label className="lecture-badge">Lecturer: Ronil Random</label>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Home;