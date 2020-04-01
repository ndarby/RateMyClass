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

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";

import classNames from "classnames";
import TeamSection from "./TeamSection";
import themeSelector from "../../SettingsPage/ThemeSelector";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className=
                            {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                        RateMyClass
                    </h2>
                    <h5 className=
                            {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                        RateMyClass is a concept born from third year Software Engineering students. Some who wanted to rant about courses they had poor experiences with.
                        Others who want to recommend A+ classes to everyone and anyone. Don't trust the Course Outline?
                        Get a good glimpse into what a course is like through the eyes of students who did the dirty work for you. Or pay it forward by helping those who
                        come after you by telling them what they need to know. RateMyClass is a platform for everyone to speak their mind, type their feelings, and read
                        the juicy gossip written by others.
                    </h5>
                </GridItem>
            </GridContainer>
            <div className=
                     {themeSelector.someProp === 'dark'? classNames(darkClasses.main, classes.mainRaised) : themeSelector.someProp === 'meme'? classNames(memeClasses.main, classes.mainRaised) : classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <TeamSection />
                </div>
            </div>
        </div>
    );
}
