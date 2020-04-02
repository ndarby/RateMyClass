import React from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

//IMPORT STUFF HERE

import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function ReviewSection(){
    const classes = useStyles();
    //GET REVIEWS FROM THE BACK END HERE


    return(
        //THE REVIEWS MAY LOOK BETTER AS A LIST, GRID CONTAINER IS JUST USED AS A PLACEHOLDER FOR NOW
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
                <h5 className={classes.title}>
                    Review Comments to be added here
                </h5>
            </GridItem>
        </GridContainer>
    );
}