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
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";
import themeSelector from '../ThemeSelector.js'

import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


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
                        Themes
                    </h2>
                    <h5 className=
                            {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                        Select a theme you would like to use to browse this application with
                    </h5>
                </GridItem>
            </GridContainer>
        </div>
    );
}
