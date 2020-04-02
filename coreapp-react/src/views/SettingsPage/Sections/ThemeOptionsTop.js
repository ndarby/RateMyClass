/*
*  THEME OPTIONS TOP PAGE
*  Section Included Under: CompanyPage
*
*  Title descriptor of Settings
*  Users can choose from light (default), dark, and meme theme
*
* */

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

/* Selects which theme to use */
import themeSelector from '../ThemeSelector.js'
/* Styles for the different themes */
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";

/* theme specific styles */
const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
    /* theme specific classes */
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                {/*title and descriptor*/}
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
