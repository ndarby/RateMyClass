import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
import team4 from "assets/img/faces/L.jpg";
import team5 from "assets/img/faces/Jen.jpg";
import team6 from "assets/img/faces/Jor.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is Our Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nathan Darby
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  NHL was cancelled...
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Katrina Chanco
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Sometimes it be like that
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  onClick={ () => alert('kat_chanco')}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  onClick={ () => alert('https://www.facebook.com/katchanco')}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Evan Krul
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Why do you have to be so Krul
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Layla Arab
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Chief of Assassins
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team6} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jordon Chung
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Wanna see a Magic Trick?
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jiaxuan Tong
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Hows the weather today?
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
