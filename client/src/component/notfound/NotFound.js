import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Pic from '../../images/notfound.gif';
import './NStyles.css';

class NotFound extends Component {

    constructor() {
        super();

        this.RedirectNotFound = this.RedirectNotFound.bind(this);
    }

    RedirectNotFound() {
        let path = '';
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="not-found-back">
                <div className="not-found">
                    <label className="not-found-label">404 Not Found</label>
                    <br />
                    <img src={Pic} alt="notfound" />
                    <h1 className="not-found-label-one">Look like you're lost</h1>
                    <label className="not-found-label-two">the page you are looking for not available!</label>
                    <br /><br />
                    <button className="not-found-home" onClick={this.RedirectNotFound}>Go Home</button>
                </div>
            </div>
        );
    }
}

export default withRouter(NotFound);