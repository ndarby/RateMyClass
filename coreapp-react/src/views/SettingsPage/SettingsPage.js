/*
*  SETTINGS PAGE
*  Section Includes: ThemeOptionsTop, ThemeOptionsBottom, ButtonBases
*
*  When users want to change the theme of RateMyClass for a different viewing experience.
*  Users can choose from light (default), dark, and meme theme
*
* */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// Sections for this page
import ThemeOptionsTop from "./Sections/ThemeOptionsTop";
import ButtonBases from "./Sections/ButtonBases";
import ThemeOptionsBottom from "./Sections/ThemeOptionsBottom";

/* Selects which theme to use */
import themeSelector from './ThemeSelector.js'
/* Styles for the different themes */
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkLandingPage.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeLandingPage.js";
import backgroundLight from "assets/img/RMC/lightSettings.jpg";
import backgroundMeme from "assets/img/RMC/memeSettings.jpg";
import backgroundDark from "assets/img/RMC/darkSettings.jpg";
import lightFiller from "assets/img/RMC/lightBackground.jpg";
import darkFiller from "assets/img/RMC/darkBackground.jpg";
import memeFiller from "assets/img/RMC/memeBackground.jpg";

/* theme specific styles */
const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

const dashboardRoutes = [];

export default function SettingsPage(props) {
    /* theme specific classes */
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    /* theme specific backgrounds */
    let backgroundURL;
    {themeSelector.someProp === 'dark'?
        backgroundURL = darkFiller :
        themeSelector.someProp === 'meme'?
            backgroundURL = memeFiller :
            backgroundURL = lightFiller
    }

    const { ...rest } = props;
    return (
        <div>
            {/*theme specifics for header menu options*/}
            {themeSelector.someProp === 'dark'?
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "dark"
                    }}
                    {...rest}
                /> :
                themeSelector.someProp === 'meme'?
                    <Header
                        color="transparent"
                        routes={dashboardRoutes}
                        rightLinks={<HeaderLinks />}
                        fixed
                        changeColorOnScroll={{
                            height: 400,
                            color: "primary"
                        }}
                        {...rest}
                    /> :
                    <Header
                        color="transparent"
                        routes={dashboardRoutes}
                        rightLinks={<HeaderLinks />}
                        fixed
                        changeColorOnScroll={{
                            height: 400,
                            color: "info"
                        }}
                        {...rest}
                    />
            }
            {/*background image coverage*/}
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + backgroundURL + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                    {/*parallax background image*/}
                    <Parallax filter image=
                        {themeSelector.someProp === 'dark'? backgroundDark : themeSelector.someProp === 'meme'?  backgroundMeme : backgroundLight}
                    >
                        {/*title for company page*/}
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h1 className={classes.title}>Settings</h1>
                                    <h4>
                                        The place where change is possible
                                    </h4>
                                    <br />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </Parallax>
                    <div className =
                             {themeSelector.someProp === 'dark'? classNames(darkClasses.main, classes.mainRaised) : themeSelector.someProp === 'meme'? classNames(memeClasses.main, classes.mainRaised) : classNames(classes.main, classes.mainRaised)}>
                        {/*redirect to component section page*/}
                        <div className={classes.container}>
                            <ThemeOptionsTop />
                            <ButtonBases />
                            <ThemeOptionsBottom />
                        </div>
                    </div>
                {/*company footer*/}
                <Footer />
            </div>
        </div>
    );
}
