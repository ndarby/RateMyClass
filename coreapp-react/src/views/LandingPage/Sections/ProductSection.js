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

import course1 from "assets/img/RMC/sArchitecture.jpg";
import course2 from "assets/img/RMC/sRequirements.jpg";
import course3 from "assets/img/RMC/sTesting.jpg";
import course4 from "assets/img/RMC/s511.png";
import course5 from "assets/img/RMC/sDatabases.jpg";
import course6 from "assets/img/RMC/sNetworks.jpg";
import classNames from "classnames";
import CardBody from "../../../components/Card/CardBody";
import Card from "../../../components/Card/Card";
import {Link} from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Course Catalogue</h2>
          <h5 className={classes.description}>
            Select a Course from the list below
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <li>
                  <Link to = "/class-page">
                  <img src={course1} alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                  </Link>
                </li>
              </GridItem>
              <GridItem xs={12} sm={12} md={11}>
                <li>
                  <Link to = "/class-page">
                  <h4 className={classes.title}>
                    SENG 401
                  </h4>
                  </Link>
                </li>
                <p className={classes.description}>
                  Software Architecture
                </p>
              </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <li>
                <Link to = "/landing-page">
                  <img src={course2} alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>
              </li>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              <li>
                <Link to = "/landing-page">
                  <h4 className={classes.title}>
                    SENG 471
                  </h4>
                </Link>
              </li>
              <p className={classes.description}>
                Software Requirements Engineering
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <li>
                <Link to = "/landing-page">
                  <img src={course3} alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>
              </li>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              <li>
                <Link to = "/landing-page">
                  <h4 className={classes.title}>
                    SENG 438
                  </h4>
                </Link>
              </li>
              <p className={classes.description}>
                Software Testing, Reliability, and Quality
              </p>
            </GridItem>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <li>
                <Link to = "/landing-page">
                  <img src={course4} alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>
              </li>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              <li>
                <Link to = "/landing-page">
                  <h4 className={classes.title}>
                    ENCM 511
                  </h4>
                </Link>
              </li>
              <p className={classes.description}>
                Embedded System Interfacing
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <li>
                <Link to = "/landing-page">
                  <img src={course5} alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>
              </li>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              <li>
                <Link to = "/landing-page">
                  <h4 className={classes.title}>
                    CPSC 457
                  </h4>
                </Link>
              </li>
              <p className={classes.description}>
                Principles of Operating Systems
              </p>
            </GridItem>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <li>
                <Link to = "/landing-page">
                  <img src={course6} alt="..." className={imageClasses} height={"300px"} width={"300px"} />
                </Link>
              </li>
            </GridItem>
            <GridItem xs={12} sm={12} md={11}>
              <li>
                <Link to = "/landing-page">
                  <h4 className={classes.title}>
                    CPSC 441
                  </h4>
                </Link>
              </li>
              <p className={classes.description}>
                Computer Networks
              </p>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
