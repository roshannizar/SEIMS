import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import SignInComp from './component/signin/SignInComp';
import SignUpComp from './component/signin/SignUpComp';
import NotFound from './component/notfound/NotFound';
import Home from './component/landing/Home';
import Dashboard from './component/dashboard/Dashboard';
import PrivateRoute from './component/common/PrivateRoute';

import './component/signin/styles.css';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    window.location.href = '/signincomp';
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/signincomp" component={SignInComp} />
              <Route exact path="/signupcomp" component={SignUpComp} />
              <Route exact path="/notfound" component={NotFound} />
              <Switch>
                <PrivateRoute exact path="/dashboard/home" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
