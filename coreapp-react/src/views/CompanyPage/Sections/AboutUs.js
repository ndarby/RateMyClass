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
import classNames from "classnames";
import ThemeOptions from "../../SettingsPage/Sections/ThemeOptionsTop";
import TeamSection from "./TeamSection";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>RateMyClass</h2>
                    <h5 className={classes.description}>
                        RateMyClass is a concept born from third year Software Engineering students who wanted to rant about their classes.
                    </h5>
                </GridItem>
            </GridContainer>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <TeamSection />
                </div>
            </div>
        </div>
    );
}
