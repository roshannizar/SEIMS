'use strict';

import React, {Component} from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import SignIn from '../SignIn/SignIn';
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
                
            </div>
        </div>;
    }
 }

 export default Course;