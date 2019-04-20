'use strict';

import React, {Component} from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import SignIn from '../SignIn/SignIn';
import { MDBBtn, MDBCollapse } from "mdbreact";
class Course extends Component {

    constructor(props) {
        super(props);
    }

    RedirectSignIn() {
        ReactDOM.render(<SignIn/>,document.getElementById('app'));
    }

    render() {
        return <div>
            <div className="course-slot">
                <div className="controls">
                    <button>View Course</button>
                    <button>Un-Enroll</button>
                    <button>View Assignments</button>
                    <button>Peek Lecturer</button>
                </div>
                
            </div>
        </div>;
    }
 }

 export default Course;