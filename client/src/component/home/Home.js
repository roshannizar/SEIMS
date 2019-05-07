import React, {Component} from 'react';

import Pic from '../../images/sub1.png';
import Pic1 from '../../images/sub2.png';
import Pic2 from '../../images/sub3.png';
import '../dashboard/Dstyles.css';

class Home extends Component {

    constructor() {
        super();

        this.state = {
            showDropNew: true,
            showDropRate: true,
            showDropView: true,
            showDropAll: true
        }
    }

    render() {

        const { showDropNew, showDropRate, showDropView, showDropAll } = this.state;
        
        return(
            <div>
                    <label className="heading-slot">Home</label>
            <div className="home-slot home-sub">
                <div className="home-label" onClick={() => this.setState({ showDropNew: !this.state.showDropNew })}>
                    <label>New</label>
                    <label className="navigate-view">View All</label>
                </div>
                {showDropNew ? (
                    <div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic} alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic1} alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic2} alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="home-slot home-sub">
                <div className="home-label" onClick={() => this.setState({ showDropRate: !this.state.showDropRate })}>
                    <label>Most Rated</label>
                    <label className="navigate-view">View All</label>
                </div>
                {showDropRate ? (
                    <div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic1}alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic2} alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <div className="home-slot home-sub">
                <div className="home-label" onClick={() => this.setState({ showDropView: !this.state.showDropView })}>
                    <label>Most Viewed</label>
                    <label className="navigate-view">View All</label>
                </div>
                {showDropView ? (
                <div>
                    <div className="home-sub-level">
                        <div className="home-image">
                            <img src={Pic} alt="pic"/>
                        </div>
                        <div className="home-image-sub">
                            <label className="home-image-sub-label">Technology</label>
                            <br /><br />
                            <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                            <br /><br />
                            <label className="rating-badge">Rating 4/5</label>
                            <label className="lecture-badge">Ronil Random</label><br /><br />
                            <label className="week-badge">Duration: 7 weeks</label><br /><br />
                            <button className="home-image-button">View</button>
                        </div>
                    </div>
                    <div className="home-sub-level">
                        <div className="home-image">
                            <img src={Pic} alt="pic"/>
                        </div>
                        <div className="home-image-sub">
                            <label className="home-image-sub-label">Technology</label>
                            <br /><br />
                            <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                            <br /><br />
                            <label className="rating-badge">Rating 4/5</label>
                            <label className="lecture-badge">Ronil Random</label><br /><br />
                            <label className="week-badge">Duration: 7 weeks</label><br /><br />
                            <button className="home-image-button">View</button>
                        </div>
                    </div>
                    <div className="home-sub-level">
                        <div className="home-image">
                            <img src={Pic} alt="pic"/>
                        </div>
                        <div className="home-image-sub">
                            <label className="home-image-sub-label">Technology</label>
                            <br /><br />
                            <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                            <br /><br />
                            <label className="rating-badge">Rating 4/5</label>
                            <label className="lecture-badge">Ronil Random</label><br /><br />
                            <label className="week-badge">Duration: 7 weeks</label><br /><br />
                            <button className="home-image-button">View</button>
                        </div>
                    </div>
                    <div className="home-sub-level">
                        <div className="home-image">
                            <img src={Pic1} alt="pic"/>
                        </div>
                        <div className="home-image-sub">
                            <label className="home-image-sub-label">Technology</label>
                            <br /><br />
                            <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                            <br /><br />
                            <label className="rating-badge">Rating 4/5</label>
                            <label className="lecture-badge">Ronil Random</label><br /><br />
                            <label className="week-badge">Duration: 7 weeks</label><br /><br />
                            <button className="home-image-button">View</button>
                        </div>
                    </div>
                </div>
                ) : null}
            </div>
            <div className="home-slot home-sub">
                <div className="home-label" onClick={() => this.setState({ showDropAll: !this.state.showDropAll })}>
                    <label>All Course</label>
                    <label className="navigate-view">View All</label>
                </div>
                {showDropAll ? (
                    <div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic2} alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                        <div className="home-sub-level">
                            <div className="home-image">
                                <img src={Pic1} alt="pic"/>
                            </div>
                            <div className="home-image-sub">
                                <label className="home-image-sub-label">Technology</label>
                                <br /><br />
                                <label className="home-image-sub-label-two">Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech Tech</label>
                                <br /><br />
                                <label className="rating-badge">Rating 4/5</label>
                                <label className="lecture-badge">Ronil Random</label><br /><br />
                                <label className="week-badge">Duration: 7 weeks</label><br /><br />
                                <button className="home-image-button">View</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            </div>
        );
    }
}

export default Home;