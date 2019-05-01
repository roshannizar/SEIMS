'use strict';

import React, { Component } from 'react';
import Pic from '../Images/facebook.png';
import Pic1 from '../Images/googleplus.png';
import Pic2 from '../Images/linkedin.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
class SignUpComp extends Component {

    constructor() {
        super();

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            password2: '',
            contactno: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    RedirectToDashboard() {
        ReactDOM.render(<Dashboard/>, document.getElementById('app'));
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            contactno: this.state.contactno
        };

        axios.post('/api/user/signup', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }));

    }

    render() {

        const { errors } = this.state;

        return <div>
            <div className="left-container">
                <div className="logo-container">
                    <label className="logo">SEIMS</label>
                </div>
                <div className="logo-container-main">
                    <label className="heading-one">Hello, Welcome back!</label><br /><br />
                    <label className="heading-two">Already have an account?, Sign In</label><br /><br />
                    <Link to="/SignInComp"><button className="btn btn-primary">Sign In</button></Link>
                </div>
                <div className="logo-container-footer">
                    <img src={Pic} className="social" />
                    <img src={Pic1} className="social" />
                    <img src={Pic2} className="social" />
                </div>
            </div>
            <div className="right-container">
                <div className="main">
                    <div className="badge-container">
                        <label className="badge-one">Your are welcome, Sign Up</label>
                    </div>
                    <div className="main-container-signup">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="left-form">
                                <label className="form-label left">First Name</label>
                                <input type="text" className="text-box" placeholder="Enter First Name" name="fname" value={this.state.fname} onChange={this.onChange} />
                                <label className="form-label left">E-Mail</label>
                                <input type="email" className="text-box" value={this.state.email} name="email" onChange={this.onChange} placeholder="Enter E-Mail" />
                                <label className="form-label left">Confirm Password</label>
                                <input type="password" className="text-box" value={this.state.password2} name="password2" onChange={this.onChange} placeholder="Enter Confirm Password" />
                            </div>
                            <div className="right-form">
                                <label className="form-label left">Last Name</label>
                                <input type="text" className="text-box" name="lname" value={this.state.lname} onChange={this.onChange} placeholder="Enter Last Name" />
                                <label className="form-label left">Password</label>
                                <input type="password" className="text-box" name="password" value={this.state.password} onChange={this.onChange} placeholder="Enter Password" />
                                <label className="form-label left">Contact No</label>
                                <input type="text" className="text-box" name="contactno" value={this.state.contactno} onChange={this.onChange} placeholder="Enter Contact No" />
                            </div>
                            <div className="right-form">
                                <input type="submit" className="button-submit" onClick={() => { this.RedirectDashboard() }} value="Create Account" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default SignUpComp;