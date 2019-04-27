'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../Dashboard/Dashboard';
import Pic from '../Images/notfound.gif';
import './NStyles.css';

class NotFoundComponent extends Component {

    constructor(props) {
        super(props);
    }

    RedirectNotFound() {
        ReactDOM.render(<Dashboard />, document.getElementById('app'));
    }

    render() {
        return <div>
            <div className="not-found-com">
                <label className="not-found-label-one">Link Broken/ Page under maintenance</label>
                <br/>
                <img src={Pic} />
                <h1 className="not-found-label-one">Look like you're lost</h1>
                <label className="not-found-label-two">the page you are looking for not available!, or Report Now!</label>
                <br /><br />
                <button className="not-found-home slight-margin-right" onClick={() => { this.RedirectNotFound() }}>Navigate Back</button>
                <button className="not-found-home slight-margin-left" onClick={() => { this.RedirectNotFound() }}>Report Now</button>
            </div>
        </div>;
    }
}

export default NotFoundComponent;