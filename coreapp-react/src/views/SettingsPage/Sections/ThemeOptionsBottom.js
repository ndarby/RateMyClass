import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";
import themeSelector from '../ThemeSelector.js'

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    return (
        <div className={classes.section}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className=
                            {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                        Option 1
                    </h4>
                    <p className=
                           {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                        Light Bright Quite Alright
                    </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className=
                            {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                        Option 2
                    </h4>
                    <p className=
                           {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                        Welcome to the Dark Side
                    </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <h4 className=
                            {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                        Option 3
                    </h4>
                    <p className=
                           {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                        (^_-)
                    </p>
                </GridItem>
            </GridContainer>
        </div>
    );
}
