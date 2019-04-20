'use strict';

import React from 'react';
import {render} from 'react-dom';
import SignIn from './public/SignIn/SignIn';
import Splash from './public/Splash/Splash';
import Dashboard from './public/Dashboard/Dashboard';
import LandingHome from './public/Landing/LandingHome';

render(<Dashboard/>, document.getElementById('app'));