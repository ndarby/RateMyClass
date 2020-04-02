/*
*  TEAM SECTION PAGE
*  Section Included Under: CompanyPage
*
*  This page shows who the people behind RateMyClass are
*  Intended to be informative to those who are unaware of what RateMyClass is
*
* */

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

/* Selects which theme to use */
import themeSelector from "../../SettingsPage/ThemeSelector";
/* Styles for the different themes */
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkTeamStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeTeamStyle.js";

/* team photos */
import team1 from "assets/img/RMC/evan.jpg";
import team2 from "assets/img/RMC/nathan.png";
import team3 from "assets/img/RMC/katrina.jpg";
import team4 from "assets/img/RMC/layla.jpg";
import team5 from "assets/img/RMC/jiaxuan.png";
import team6 from "assets/img/RMC/jordon.png";

/* theme specific styles */
const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function TeamSection() {
  /* theme specific classes */
  const classes = useStyles();
  const darkClasses = useDarkStyles();
  const memeClasses = useMemeStyles();

  /* image formatting */
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      {/*theme specific titles*/}
      <h2 className=
              {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
        Here is Our Team
      </h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/*team member photo*/}
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              {/*team member name*/}
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Nathan Darby
                <br />
              </h4>
              <CardBody>
                {/*team member description*/}
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Burgers make any day better
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/*team member photo*/}
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              {/*team member name*/}
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Katrina Chanco
                <br />
              </h4>
              <CardBody>
                {/*team member description*/}
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Sometimes it be like that
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/*team member photo*/}
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              {/*team member name*/}
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Evan Krul
                <br />
              </h4>
              <CardBody>
                {/*team member description*/}
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Why do you have to be so Krul
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/*team member photo*/}
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              {/*team member name*/}
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Layla Arab
                <br />
              </h4>
              <CardBody>
                {/*team member description*/}
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Coffee grind
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/*team member photo*/}
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team6} alt="..." className={imageClasses} />
              </GridItem>
              {/*team member name*/}
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Jordon Chung
                <br />
              </h4>
              <CardBody>
                {/*team member description*/}
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Want to see a magic trick?
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              {/*team member photo*/}
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              {/*team member name*/}
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Jiaxuan Tong
                <br />
              </h4>
              <CardBody>
                {/*team member description*/}
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Good vibes only
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
