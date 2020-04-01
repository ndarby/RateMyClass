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

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkTeamStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeTeamStyle.js";

import team1 from "assets/img/faces/evan.jpg";
import team2 from "assets/img/faces/nathan.jpg";
import team3 from "assets/img/faces/katrina.jpg";
import team4 from "assets/img/faces/layla.jpg";
import team5 from "assets/img/faces/jiaxuan.jpg";
import team6 from "assets/img/faces/jordon.jpg";
import themeSelector from "../../SettingsPage/ThemeSelector";


const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function TeamSection() {
  const classes = useStyles();
  const darkClasses = useDarkStyles();
  const memeClasses = useMemeStyles();

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className=
              {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
        Here is Our Team
      </h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Nathan Darby
                <br />
              </h4>
              <CardBody>
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  NHL was cancelled...
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Katrina Chanco
                <br />
              </h4>
              <CardBody>
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Sometimes it be like that
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Evan Krul
                <br />
              </h4>
              <CardBody>
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Why do you have to be so Krul
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Layla Arab
                <br />
              </h4>
              <CardBody>
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Chief of Assassins
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team6} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Jordon Chung
                <br />
              </h4>
              <CardBody>
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Wanna see a Magic Trick?
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className=
                      {themeSelector.someProp === 'dark'? darkClasses.cardTitle : themeSelector.someProp === 'meme'? memeClasses.cardTitle : classes.cardTitle}>
                Jiaxuan Tong
                <br />
              </h4>
              <CardBody>
                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Hows the weather today?
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
