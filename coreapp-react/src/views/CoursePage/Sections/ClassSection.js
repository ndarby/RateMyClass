/*
*  CLASS SECTION PAGE
*  Section Included Under: CoursePage/Sections
*
*  This page displays the main content of the class page, calling attribute and review sections to display
* their content as well
*
* */

import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

/* Selects which theme to use */
import themeSelector from "../../Aesthetic/ThemeSelector";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";

import classNames from "classnames";

import ReviewSection from "./ReviewSection.js";
import AttributeSection from "./AttributeSection.js";

//theme styles
const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);


export default function ProductSection() {
    //variables for theme styles
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );
    //current course id
    let { course_id } = useParams();
    console.log(course_id);
    //displays a title, with styling dependant on theme
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                {/*<GridItem xs={12} sm={12} md={8}>*/}
                {/*    <h2 className=*/}
                {/*            {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>*/}
                {/*        Course Information*/}
                {/*    </h2>*/}
                {/*    <h5 className=*/}
                {/*            {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>*/}
                {/*        View Current Ratings or Leave a Review Below!*/}
                {/*    </h5>*/}
                {/*    <br></br>*/}
                {/*</GridItem>*/}
            </GridContainer>
            <div>
                {/*Calls Attribute and Review pages, and displays their content*/}
                <AttributeSection/>
                <ReviewSection/>
            </div>
        </div>
    );
}
