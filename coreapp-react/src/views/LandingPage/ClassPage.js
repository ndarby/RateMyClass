import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ClassSection from "./Sections/ClassSection.js";




const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

    const [course, setCourse] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    let { course_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            fetch("/api/courses/get/"+course_id, {
                "method": "GET",
                "headers": {}
            }).then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setCourse(response);
                })
                .catch(err => {
                    console.log(err);
                });

        };
        fetchData();
    }, []);

    if(!isLoaded) {
        return (
            <h1></h1>
        );
    } else {


        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "info"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/RMC/lightArchitecture.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>{course._course_name} {course._course_num}</h1>
                                <h4>
                                    {course._course_description}
                                </h4>
                                <br/>

                                {/*
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
              */}

                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <ClassSection/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
