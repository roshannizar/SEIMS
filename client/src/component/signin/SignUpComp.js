import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Pic from '../../images/facebook.png';
import Pic1 from '../../images/googleplus.png';
import Pic2 from '../../images/linkedin.png';

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
            roletype: 'Student',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthneticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
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
            contactno: this.state.contactno,
            roletype: this.state.roletype
        };

        this.props.registerUser(newUser, this.props.history);

    }

    render() {

        const { errors } = this.state;

        return (
            <div className="back-image">
                <div className="left-container">
                    <div className="logo-container">
                        <label className="logo slight-left">SEIMS</label>
                        <Link to="/"><label className="logo">HOME</label></Link>
                    </div>
                    <div className="logo-container-main">
                        <label className="heading-one">Hello, Welcome back!</label><br /><br />
                        <label className="heading-two">Already have an account?, Sign In</label><br /><br />
                        <Link to="/signincomp"><button className="btn btn-primary">Sign In</button></Link>
                    </div>
                    <div className="logo-container-footer">
                        <img src={Pic} className="social" alt="social" />
                        <img src={Pic1} className="social" alt="social" />
                        <img src={Pic2} className="social" alt="social" />
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
                                    <input type="text" className={classnames('text-box', {'is-invalid': errors.fname})} placeholder="Enter First Name" name="fname" value={this.state.fname} onChange={this.onChange} />
                                    { errors.fname && (<div className="invalid-feedback">{errors.fname}</div>)}
                                    <label className="form-label left">E-Mail</label>
                                    <input type="email" className={classnames('text-box', {'is-invalid': errors.email})} value={this.state.email} name="email" onChange={this.onChange} placeholder="Enter E-Mail" />
                                    { errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                    <label className="form-label left">Confirm Password</label>
                                    <input type="password" className={classnames('text-box', {'is-invalid': errors.password2})} value={this.state.password2} name="password2" onChange={this.onChange} placeholder="Enter Confirm Password" />
                                    { errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                                </div>
                                <div className="right-form">
                                    <label className="form-label left">Last Name</label>
                                    <input type="password" className={classnames('text-box', {'is-invalid': errors.lname})} name="lname" value={this.state.lname} onChange={this.onChange} placeholder="Enter Last Name" />
                                    { errors.lname && (<div className="invalid-feedback">{errors.lname}</div>)}
                                    <label className="form-label left">Password</label>
                                    <input type="password" className={classnames('text-box', {'is-invalid': errors.password})} name="password" value={this.state.password} onChange={this.onChange} placeholder="Enter Password" />
                                    { errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                    <label className="form-label left">Contact No</label>
                                    <input type="text" className={classnames('text-box', {'is-invalid': errors.contactno})} name="contactno" value={this.state.contactno} onChange={this.onChange} placeholder="Enter Contact No" />
                                    { errors.contactno && (<div className="invalid-feedback">{errors.contactno}</div>)}
                                </div>
                                <div className="right-form">
                                    <input type="submit" className="button-submit" value="Create Account" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SignUpComp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUpComp));