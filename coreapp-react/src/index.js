import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';	
import blue from '@material-ui/core/colors/blue';
import blueGrey from '@material-ui/core/colors/blueGrey';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import './index.css';
import App from './app/App';

const primary = blueGrey['900'];
const secondary = blue['A700'];

render((
	<div>
	<AppBar position="static">
  	<Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu">
    	
    </IconButton>
    	<Typography variant="h6" color="inherit">
    	  RateMyClass
    	</Typography>
  	</Toolbar>
	</AppBar>
	<BrowserRouter>
        <App/>
    </BrowserRouter>
    </div>
), document.getElementById('root'));
