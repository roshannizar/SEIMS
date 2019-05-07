/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SignInComp from '../signin/SignInComp';
import SignUpComp from '../signin/SignUpComp';
import './styles.css';
import Pic from '../../images/homeimage.PNG';

class Home extends Component {

    RedirectToSignIn() {
        ReactDOM.render(<SignInComp/>, document.getElementById('root'));
    }

    RedirectToSignUp() {
        ReactDOM.render(<SignUpComp/>, document.getElementById('root'));
    }

    render() {
        return (
            <div>
                <div className="nav-bar-home">
                    <div className="nav-bar-sub-home">
                        <label>SEIMS</label>
                    </div>
                    <div className="nav-bar-sub-link">
                        <a href="#" className="link">FACULTIES</a>
                        <a href="#" className="link">CONTACT US</a>
                        <a href="#" className="link">ABOUT US</a>
                        <a href="/signincomp" className="link" onClick={() => {this.RedirectToSignIn()}}>SIGN IN</a>
                        <a href="/signupcomp" className="link" onClick={() => {this.RedirectToSignUp()}}>SIGN UP</a>
                    </div>
                </div>
                <div className="container">
                        <div className="container-right">
                            <h2>SEIMS</h2>
                            <button className="selector active">Student</button>
                            <button className="selector">Instructor</button>
                            <button className="selector">Admin</button><br/>
                            <img src={Pic} className="adver-image" alt="pic"/>
                        </div>
                        <div className="container-left">
                            <h1>A place to access your courses easier</h1>
                            <label>Sign In to access, No Account? create one</label>
                        </div>
                    </div>
                <div className="container-rolls">

                </div>
            </div>
        );
    }
}

export default Home;