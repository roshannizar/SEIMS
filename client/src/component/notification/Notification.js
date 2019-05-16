import React, { Component } from 'react';

import Pic1 from '../../images/person.png';
import '../dashboard/Dstyles.css';

class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div className="modal">
                <div className="noti-title" onClick={() => this.closeModal()}>
                    <h1>Notifications</h1>
                </div>
                <hr />
                <div className="noti-content">
                    <img src={Pic1} className="person-img" alt="personimage" />
                    <label className="noti-badge">Anounymous</label>
                    <label className="date-badge">2019/04/09</label>
                    <div className="noti-cont">
                        <label>An Assignment for Distrbuted system, deadline has been extended.</label>
                    </div>
                </div>
                <div className="noti-content">
                    <div className="noti-slot">
                        <img src={Pic1} alt="pic" />
                        <label className="noti-badge">Anounymous</label>
                        <label className="date-badge">2019/04/09</label>
                        <div className="noti-cont">
                            <label>New Assignment as been uploaded for Software Architecture. check now</label>
                        </div>
                    </div>
                </div>
                <div className="noti-content">
                    <div className="noti-slot">
                        <img src={Pic1} alt="pic2" />
                        <label className="noti-badge">Anounymous</label>
                        <label className="date-badge">2019/04/09</label>
                        <div className="noti-cont">
                            <label>New Assignment as been uploaded for Software Architecture. check now</label>
                        </div>
                    </div>
                </div>
                <div className="noti-content">
                    <div className="noti-slot">
                        <img src={Pic1} alt="pic3" />
                        <label className="noti-badge">Anounymous</label>
                        <label className="date-badge">2019/04/09</label>
                        <div className="noti-cont">
                            <label>New Assignment as been uploaded for Software Architecture. check now</label>
                        </div>
                    </div>
                </div>
                <div className="noti-content">
                    <div className="noti-slot">
                        <img src={Pic1} alt="pic4" />
                        <label className="noti-badge">Anounymous</label>
                        <label className="date-badge">2019/04/09</label>
                        <div className="noti-cont">
                            <label>New Assignment as been uploaded for Software Architecture. check now</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;