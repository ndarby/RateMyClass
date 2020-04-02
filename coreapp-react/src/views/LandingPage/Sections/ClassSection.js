import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import classNames from "classnames";

import ReviewSection from "./ReviewSection.js";
import AttributeSection from "./AttributeSection.js";

const useStyles = makeStyles(styles);


// create function with a get request here to be used and displayed below

export default function ProductSection() {
    const classes = useStyles();
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
                    <h2 className={classes.title}>Course Information</h2>
                    <h5 className={classes.description}>
                        View Current Ratings or Leave a Review Below!
                    </h5>
                </GridItem>
            </GridContainer>
            <div>

                <AttributeSection/>
                <ReviewSection/>

            </div>
        </div>
    );
}
