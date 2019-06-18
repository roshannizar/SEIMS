/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import Pic from '../../images/loading.gif';
import '../dashboard/Dstyles.css';

class Spinner extends Component {

    render() {
        return(
            <div className="center full-width">
                <img src={Pic}/>
            </div>
        );
    }
}

export default Spinner;