/*
*  COMPANY PAGE
*  Sections Include: AboutUs, TeamSection
*
*  This page describes what RateMyClass is and the people behind making it possible
*  Intended to be informative to those who are unaware of what RateMyClass is
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
import AboutUs from "./Sections/AboutUs";

/* Selects which theme to use */
import themeSelector from "../Aesthetic/ThemeSelector";
/* Styles for the different themes */
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkLandingPage.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeLandingPage.js";
import backgroundLight from "assets/img/RMC/lightCompany.jpg";
import backgroundMeme from "assets/img/RMC/memeCompany.jpg";
import backgroundDark from "assets/img/RMC/darkCompany.jpg";
import lightFiller from "assets/img/RMC/lightBackground.jpg";
import darkFiller from "assets/img/RMC/darkBackground.jpg";
import memeFiller from "assets/img/RMC/memeBackground.jpg";

const dashboardRoutes = [];

/* theme specific styles */
const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function CompanyPage(props) {
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
                                <h1 className={classes.title}> About Us </h1>
                                <h4> Everything you need to know and some things you didn't </h4>
                                <br />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                    <div className=
                             {themeSelector.someProp === 'dark'? classNames(darkClasses.main, classes.mainRaised) : themeSelector.someProp === 'meme'? classNames(memeClasses.main, classes.mainRaised) : classNames(classes.main, classes.mainRaised)}>
                        {/*redirect to component section page*/}
                        <div className={classes.container}>
                            <AboutUs />
                        </div>
                    </div>
                {/*company footer*/}
                <Footer />
            </div>
        </div>
    );
}
