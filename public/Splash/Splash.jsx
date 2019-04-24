'use strict';

import React, { Component } from 'react';

export default class Splash extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="main">
            <button data-toggle="dropdown">Link Another Page</button>
        </div>;
    }
}