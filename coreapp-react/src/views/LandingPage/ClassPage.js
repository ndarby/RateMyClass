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


// Sections for this page
import ClassSection from "./Sections/ClassSection.js";

/* Selects which theme to use */
import themeSelector from '../SettingsPage/ThemeSelector'
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkLandingPage.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeLandingPage.js";
import lightFiller from "assets/img/RMC/lightBackground.jpg";
import darkFiller from "assets/img/RMC/darkBackground.jpg";
import memeFiller from "assets/img/RMC/memeBackground.jpg";
import courseImg from "assets/img/RMC/CourseImage.jpg";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function LandingPage(props) {
  const classes = useStyles();
  const darkClasses = useDarkStyles();
  const memeClasses = useMemeStyles();
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

    /* theme specific backgrounds */
    let backgroundURL;
    {themeSelector.someProp === 'dark'?
        backgroundURL = darkFiller :
        themeSelector.someProp === 'meme'?
            backgroundURL = memeFiller :
            backgroundURL = lightFiller
    }

    if(!isLoaded) {
        return (
            <h1></h1>
        );
    } else {


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
                    <Parallax filter image={courseImg}>
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
                    <div className=
                             {themeSelector.someProp === 'dark'? classNames(darkClasses.main, classes.mainRaised) : themeSelector.someProp === 'meme'? classNames(memeClasses.main, classes.mainRaised) : classNames(classes.main, classes.mainRaised)}>
                    >
                        <div className={classes.container}>
                            <ClassSection/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
