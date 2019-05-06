import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import SignInComp from './component/signin/SignInComp';
import SignUpComp from './component/signin/SignUpComp';
import NotFound from './component/notfound/NotFound';
import Home from './component/landing/Home';
import Dashboard from './component/dashboard/Dashboard';

import './component/signin/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router>
          <div>
            {/* <Home /> */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/signincomp" component={SignInComp} />
            <Route exact path="/signupcomp" component={SignUpComp} />
            <Route exact path="/notfound" component={NotFound} />
            <Route exact path="/dashboard/home" component={Dashboard}/>
            <Route exact path="/dashboard/maincontainer" component={Dashboard}/>
            <Route exact path="/dashboard/course" component={Dashboard}/>
            <Route exact path="/dashboard/course/mycourse" component={Dashboard}/>
          </div>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
