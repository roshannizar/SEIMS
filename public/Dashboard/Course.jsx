'use strict';

import React, {Component} from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import SignIn from '../SignIn/SignIn';
import {Button, Collapse} from 'react-bootstrap';
class Course extends Component {

    constructor(props) {
        super(props);
    }

    StateClick() {
        this.state = {
            open:false
        }
    }


    RedirectSignIn() {
        ReactDOM.render(<SignIn/>,document.getElementById('app'));
    }
    render() {
        return <div>
            <div className="course-slot">
                <div className="controls">
                    <button className="controls-btn">View Course</button>
                    <button className="controls-btn">Un-Enroll</button>
                    <button className="controls-btn">View Assignments</button>
                    <button className="controls-btn">Peek Lecturer</button>
                </div>
                <div className="course-detail">
                <Button className="btn" onClick={!this.StateClick()}>
                     Collapse Div
                </Button>

                <Collapse in={this.StateClick()}>
                    <div>
                        <p>Content when the button is clicked</p>
                    </div>
                </Collapse>
                </div>
            </div>
        </div>;
    }
 }

 export default Course;