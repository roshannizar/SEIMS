import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/authActions';
import ReactDOM from 'react-dom';

import Pic from '../../images/facebook.png';
import Pic1 from '../../images/googleplus.png';
import Pic2 from '../../images/linkedin.png';
import Dashboard from '../dashboard/Dashboard';
import './styles.css';

class SignInComp extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard/home');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard/home');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
                        <label className="heading-one">Hello, Companion!</label><br /><br />
                        <label className="heading-two">No Account?, Create One</label><br /><br />
                        <Link to="/SignUpComp"><button className="btn btn-primary">Sign Up</button></Link>
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
                            <label className="badge-one">Welcome Back, Sign In</label>
                        </div>
                        <div className="main-container">
                            <form onSubmit={this.onSubmit}>
                                <div className="left-form">
                                    <label className="form-label left">E-Mail</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="text-box" placeholder="Enter E-Mail" />
                                </div>
                                <div className="right-form">
                                    <label className="form-label left">Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="text-box" placeholder="Enter Password" />
                                </div>
                                <div className="right-form">
                                    <div className="left-form slight-padding">
                                        <a href="#" className="link-style-signin">Forgot Password?</a>
                                    </div>
                                    <input type="submit" className="button-submit" value="Sign In to Dashboard" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SignInComp.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(SignInComp);