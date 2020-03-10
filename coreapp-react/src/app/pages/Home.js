import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const p = blueGrey['500'];

class Home extends Component {
    render() {
        return (
            <div className="App">
                <br /><br />
                {/* Link to List.js */}
                <Link to={'./list'}>
                    <Button variant="contained" color="p">
                        Button
                    </Button>
                </Link>
            </div>
        );
    }
}
export default Home;
