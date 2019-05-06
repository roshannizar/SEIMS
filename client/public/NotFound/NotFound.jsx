'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard/Dashboard';
import Pic from '../Images/notfound.gif';
import './NStyles.css';

class NotFound extends Component {

    constructor(props) {
        super(props);
    }

    RedirectNotFound() {
        ReactDOM.render(<Dashboard />, document.getElementById('app'));
    }

    render() {
        return <div>
            <div className="not-found">
                <label className="not-found-label">404 Not Found</label>
                <br />
                <img src={Pic} />
                <h1 className="not-found-label-one">Look like you're lost</h1>
                <label className="not-found-label-two">the page you are looking for not available!</label>
                <br /><br />
                <button className="not-found-home" onClick={() => { this.RedirectNotFound() }}>Go Home</button>
            </div>
        </div>;
    }
}

export default NotFound;