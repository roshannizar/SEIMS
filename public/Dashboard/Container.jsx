'use strict';

import React, {Component} from 'react';
import MainContainer from './MainContainer';
import './styles.css';

class Container extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <MainContainer/>
        </div>;
    }
}

export default Container;