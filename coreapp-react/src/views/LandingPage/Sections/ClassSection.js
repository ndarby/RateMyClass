import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

/* Selects which theme to use */
import themeSelector from "../../SettingsPage/ThemeSelector";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";


import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



import classNames from "classnames";

import ReviewSection from "./ReviewSection.js";
import AttributeSection from "./AttributeSection.js";


const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);


// create function with a get request here to be used and displayed below

export default function ProductSection() {
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );
    // console.log(this.props.match.params.course_id);
    let { course_id } = useParams();
    console.log(course_id);

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className=
                            {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                        Course Information
                    </h2>
                    <h5 className=
                            {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                        View Current Ratings or Leave a Review Below!
                    </h5>
                    <br></br>
                </GridItem>
            </GridContainer>
            <div>
                <AttributeSection/>
                <ReviewSection/>
            </div>
        </div>
    );
}
