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
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

// import course1 from "assets/img/RMC/sArchitecture.jpg";
// import course2 from "assets/img/RMC/sRequirements.jpg";
// import course3 from "assets/img/RMC/sTesting.jpg";
// import course4 from "assets/img/RMC/s511.png";
// import course5 from "assets/img/RMC/sDatabases.jpg";
// import course6 from "assets/img/RMC/sNetworks.jpg";

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

const useStyles = makeStyles(styles);
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

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
          <h2 className={classes.title}>Course Information</h2>
          <h5 className={classes.description}>
            View Current Ratings or Leave a Review Below
          </h5>
        </GridItem>
      </GridContainer>
      <div>


        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Custom icon set</Typography>
          <Rating
              name="customized-icons"
              defaultValue={2}
              getLabelText={value => customIcons[value].label}
              IconContainerComponent={IconContainer}
          />
        </Box>
        <Box justify="left" component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Custom icon set</Typography>
          Course Name:
          Overall Rating:

        </Box>

        {/*<GridContainer>*/}
        {/*  <GridItem xs={12} sm={12} md={4}>*/}
        {/*      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
        {/*        <li>*/}
        {/*          <Link to = "/class-page">*/}
        {/*          <img src={course1} alt="..." className={imageClasses} height={"300px"} width={"300px"} />*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*      </GridItem>*/}
        {/*      <GridItem xs={12} sm={12} md={11}>*/}
        {/*        <li>*/}
        {/*          <Link to = "/class-page">*/}
        {/*          <h4 className={classes.title}>*/}
        {/*            SENG 401*/}
        {/*          </h4>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*        <p className={classes.description}>*/}
        {/*          Software Architecture*/}
        {/*        </p>*/}
        {/*      </GridItem>*/}
        {/*  </GridItem>*/}
        {/*  <GridItem xs={12} sm={12} md={4}>*/}
        {/*    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <img src={course2} alt="..." className={imageClasses} height={"300px"} width={"300px"} />*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={11}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <h4 className={classes.title}>*/}
        {/*            SENG 471*/}
        {/*          </h4>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <p className={classes.description}>*/}
        {/*        Software Requirements Engineering*/}
        {/*      </p>*/}
        {/*    </GridItem>*/}
        {/*  </GridItem>*/}
        {/*  <GridItem xs={12} sm={12} md={4}>*/}
        {/*    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <img src={course3} alt="..." className={imageClasses} height={"300px"} width={"300px"} />*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={11}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <h4 className={classes.title}>*/}
        {/*            SENG 438*/}
        {/*          </h4>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <p className={classes.description}>*/}
        {/*        Software Testing, Reliability, and Quality*/}
        {/*      </p>*/}
        {/*    </GridItem>*/}
        {/*  </GridItem>*/}
        {/*</GridContainer>*/}
        {/*<GridContainer>*/}
        {/*  <GridItem xs={12} sm={12} md={4}>*/}
        {/*    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <img src={course4} alt="..." className={imageClasses} height={"300px"} width={"300px"} />*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={11}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <h4 className={classes.title}>*/}
        {/*            ENCM 511*/}
        {/*          </h4>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <p className={classes.description}>*/}
        {/*        Embedded System Interfacing*/}
        {/*      </p>*/}
        {/*    </GridItem>*/}
        {/*  </GridItem>*/}
        {/*  <GridItem xs={12} sm={12} md={4}>*/}
        {/*    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <img src={course5} alt="..." className={imageClasses} height={"300px"} width={"300px"} />*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={11}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <h4 className={classes.title}>*/}
        {/*            CPSC 457*/}
        {/*          </h4>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <p className={classes.description}>*/}
        {/*        Principles of Operating Systems*/}
        {/*      </p>*/}
        {/*    </GridItem>*/}
        {/*  </GridItem>*/}
        {/*  <GridItem xs={12} sm={12} md={4}>*/}
        {/*    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <img src={course6} alt="..." className={imageClasses} height={"300px"} width={"300px"} />*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </GridItem>*/}
        {/*    <GridItem xs={12} sm={12} md={11}>*/}
        {/*      <li>*/}
        {/*        <Link to = "/landing-page">*/}
        {/*          <h4 className={classes.title}>*/}
        {/*            CPSC 441*/}
        {/*          </h4>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <p className={classes.description}>*/}
        {/*        Computer Networks*/}
        {/*      </p>*/}
        {/*    </GridItem>*/}
        {/*  </GridItem>*/}
        {/*</GridContainer>*/}
      </div>
    </div>
  );
}
