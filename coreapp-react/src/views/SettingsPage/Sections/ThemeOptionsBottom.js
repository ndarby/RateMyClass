import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.title}>
                        Option 1
                    </h4>
                    <p className={classes.description}>
                        Light and Upbeat... Not like my life
                    </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.title}>
                        Option 2
                    </h4>
                    <p className={classes.description}>
                        The right way to view the world
                    </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className={classes.title}>
                        Option 3
                    </h4>
                    <p className={classes.description}>
                        (^_-)
                    </p>
                </GridItem>
            </GridContainer>
        </div>
    );
}
