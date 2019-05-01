'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../SignIn/styles.css';
import Dashboard from '../Dashboard/Dashboard';
import SignInComp from './SignInComp';
import SignUpComp from './SignUpComp';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

class SignIn extends Component {

    constructor(props) {
        super(props);
    }

    RedirectDashboard() {
        ReactDOM.render(<Dashboard />, document.getElementById('app'));
    }

    render() {
        return <div>
                <Router>
                    <div className="back-image">
                        <SignInComp />
                        <Switch>
                            <Route exact path="/SignInComp" component={SignInComp} />
                            <Route exact path="/SignUpComp" component={SignUpComp} />
                            <Route exact path="/NotFound" component={NotFound} />
                        </Switch>
                    </div>
                </Router>
        </div>;
    }
}

export default SignIn;