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

import course1 from "assets/img/RMC/lightArchitecture.jpg";
import course1D from "assets/img/RMC/lightArchitecture.jpg";
import course1M from "assets/img/RMC/memeArchitecture.jpg";

import course2 from "assets/img/RMC/lightRequirements.jpg";
import course2D from "assets/img/RMC/lightRequirements.jpg";
import course2M from "assets/img/RMC/memeRequirements.jpg";

import course3 from "assets/img/RMC/lightTesting.jpg";
import course3D from "assets/img/RMC/lightTesting.jpg";
import course3M from "assets/img/RMC/memeTesting.jpg";

import course4 from "assets/img/RMC/light511.png";
import course4D from "assets/img/RMC/light511.png";
import course4M from "assets/img/RMC/meme511.jpg";

import course5 from "assets/img/RMC/lightDatabases.jpg";
import course5D from "assets/img/RMC/lightDatabases.jpg";
import course5M from "assets/img/RMC/memeDatabases.jpg";

import course6 from "assets/img/RMC/lightNetworks.jpg";
import course6D from "assets/img/RMC/lightNetworks.jpg";
import course6M from "assets/img/RMC/memeNetworks.jpg";

import classNames from "classnames";
import CardBody from "../../../components/Card/CardBody";
import Card from "../../../components/Card/Card";
import {Link} from "react-router-dom";
import themeSelector from "../../SettingsPage/ThemeSelector";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
  const classes = useStyles();
  const darkClasses = useDarkStyles();
  const memeClasses = useMemeStyles();

  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className=
                  {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
              Course Catalogue
          </h2>
          <h5 className=
                  {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
            Select a Course from the list below
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <br></br>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Link to = "/class-page">
                  <img src=
                           { themeSelector.someProp === 'dark'? course1D : themeSelector.someProp === 'meme'? course1M : course1 }
                       alt="..." className={imageClasses} height={"300px"} width={"300px"} />

                  </Link>

              </GridItem>
              <GridItem xs={12} sm={12} md={11}>
                  <Link to = "/class-page">
                  <h4 className=
                          {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                    SENG 401
                  </h4>
                  </Link>

                <p className=
                       {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                  Software Architecture
                </p>
              </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

                <Link to = "/landing-page">
                  <img src=
                           { themeSelector.someProp === 'dark'? course2D : themeSelector.someProp === 'meme'? course2M : course2 }
                       alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>

            </GridItem>
            <GridItem xs={12} sm={12} md={11}>

                <Link to = "/landing-page">
                  <h4 className=
                          {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                    SENG 471
                  </h4>
                </Link>

              <p className=
                     {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                Software Requirements Engineering
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

                <Link to = "/landing-page">
                  <img src=
                           { themeSelector.someProp === 'dark'? course3D : themeSelector.someProp === 'meme'? course3M : course3 }
                       alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>

            </GridItem>
            <GridItem xs={12} sm={12} md={11}>

                <Link to = "/landing-page">
                  <h4 className=
                          {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                    SENG 438
                  </h4>
                </Link>

              <p className=
                     {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                Software Testing, Reliability, and Quality
              </p>
            </GridItem>
          </GridItem>
        </GridContainer>
        <div><br></br></div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

                <Link to = "/landing-page">
                    <img src=
                             { themeSelector.someProp === 'dark'? course4D : themeSelector.someProp === 'meme'? course4M : course4 }
                     alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>

            </GridItem>
            <GridItem xs={12} sm={12} md={11}>

                <Link to = "/landing-page">
                  <h4 className=
                          {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                    ENCM 511
                  </h4>
                </Link>

              <p className=
                     {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                Embedded System Interfacing
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

                <Link to = "/landing-page">
                  <img src=
                           { themeSelector.someProp === 'dark'? course5D : themeSelector.someProp === 'meme'? course5M : course5 }
                       alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>

            </GridItem>
            <GridItem xs={12} sm={12} md={11}>

                <Link to = "/landing-page">
                  <h4 className=
                          {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                    CPSC 457
                  </h4>
                </Link>

              <p className=
                     {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                Principles of Operating Systems
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>

                <Link to = "/landing-page">
                  <img src=
                           { themeSelector.someProp === 'dark'? course6D : themeSelector.someProp === 'meme'? course6M : course6 }
                       alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>

            </GridItem>
            <GridItem xs={12} sm={12} md={11}>

                <Link to = "/landing-page">
                  <h4 className=
                          {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>
                    CPSC 441
                  </h4>
                </Link>

              <p className=
                     {themeSelector.someProp === 'dark'? darkClasses.description : themeSelector.someProp === 'meme'? memeClasses.description : classes.description}>
                Computer Networks
              </p>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
