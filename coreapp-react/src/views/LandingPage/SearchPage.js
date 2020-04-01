// import React, {useState} from "react";
import React, {useState, useEffect} from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkLandingPage.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeLandingPage.js";

import productStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import productDarkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import productMemeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import themeSelector from "../SettingsPage/ThemeSelector";
import backgroundLight from "assets/img/RMC/LandingDisplay.jpg";
import backgroundMeme from "assets/img/RMC/memeLandingDisplay.png";
import backgroundDark from "assets/img/RMC/darkLandingDisplay.jpg";
import lightFiller from "assets/img/RMC/lightBackground.jpg";
import darkFiller from "assets/img/RMC/darkBackground.jpg";
import memeFiller from "assets/img/RMC/memeBackground.jpg";

import {Search} from "@material-ui/icons";
import Card from "../../components/Card/Card";
import {Link} from "react-router-dom";
import searchInformation from "../SearchInformation";
// import course1D from "*.jpg";
// import course1M from "*.jpg";
// import course1 from "*.jpg";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);
const useProductStyles = makeStyles(productStyles);
const useProductDarkStyles = makeStyles(productDarkStyles);
const useProductMemeStyles = makeStyles(productMemeStyles);

// let cName = 'SENG';
// let cNum = '401';
// let cDescription = 'Software Architecture';

export default function SearchPage(props) {
    // const search = localStorage.getItem('search');

    const [courses, setCourses] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            fetch("/api/courses/get", {
                "method": "GET",
                "headers": {}
            }).then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setCourses(response);
                })
                .catch(err => {
                    console.log(err);
                });

        };
        fetchData();
    }, []);

    const [searchNumber, setSearchNumber] = useState('');
    const isEnabled = searchNumber !== '' && searchNumber !== undefined;

    // const [courseName, setCourseName] = useState(cName);
    // const [courseNum, setCourseNum] = useState(cNum);
    // const [courseDescription, setCourseDescription] = useState(cDescription);

    const [courseName, setCourseName] = useState('');
    const [courseNum, setCourseNum] = useState('');
    const [courseDescription, setCourseDescription] = useState('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        // localStorage.setItem("search", searchNumber);
        searchInformation.searchInfo = searchNumber;
        props.history.push('/search-results-page');
    };

    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();
    const productClasses = useProductStyles();
    const productDarkClasses = useProductDarkStyles();
    const productMemeClasses = useProductMemeStyles();

    let backgroundURL;
    {themeSelector.someProp === 'dark'?
        backgroundURL = darkFiller :
        themeSelector.someProp === 'meme'?
            backgroundURL = memeFiller :
            backgroundURL = lightFiller
    }

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);

    const { ...rest } = props;
    if(!isLoaded) {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className=
                            {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                        Course Catalogue
                    </h2>
                    <h5 className=
                            {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                        Failure when loading courses.
                    </h5>
                    {/*>>>>>>> c767c1943bb73632be5548973933eef4c61756dc*/}
                </GridItem>
            </GridContainer>
        );
    } else {
        return (
            <div>
                {themeSelector.someProp === 'dark' ?
                    <Header
                        color="transparent"
                        rightLinks={<HeaderLinks/>}
                        fixed
                        changeColorOnScroll={{
                            height: 200,
                            color: "dark"
                        }}
                        {...rest}
                    /> :
                    themeSelector.someProp === 'meme' ?
                        <Header
                            color="transparent"
                            rightLinks={<HeaderLinks/>}
                            fixed
                            changeColorOnScroll={{
                                height: 200,
                                color: "primary"
                            }}
                            {...rest}
                        /> :
                        <Header
                            color="transparent"
                            rightLinks={<HeaderLinks/>}
                            fixed
                            changeColorOnScroll={{
                                height: 200,
                                color: "info"
                            }}
                            {...rest}
                        />
                }

                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + backgroundURL + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                    }}
                >
                    <Parallax filter image=
                        {themeSelector.someProp === 'dark' ? backgroundDark : themeSelector.someProp === 'meme' ? backgroundMeme : backgroundLight}
                    >
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <h1 className={classes.title}>Search for Course</h1>
                                    <h4>
                                        Find a Course by using the Search Bar Below
                                    </h4>
                                    <br/>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </Parallax>
                    <div className=
                             {themeSelector.someProp === 'dark' ? classNames(darkClasses.main, classes.mainRaised) : themeSelector.someProp === 'meme' ? classNames(memeClasses.main, classes.mainRaised) : classNames(classes.main, classes.mainRaised)}>
                        <div>
                            <div className={classes.section}>
                                <div className={classes.container}>
                                    <GridContainer justify="center">
                                        <GridItem xs={12} sm={12} md={4}>
                                            <div><br></br></div>
                                            <Card className={classes[cardAnimaton]}>
                                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                                    <cardBody>
                                                        <GridItem xs={12} sm={12} md={12}>
                                                            <TextField
                                                                variant="filled"
                                                                margin="normal"
                                                                id="search"
                                                                fullWidth
                                                                label="Search By COURSE NUMBER"
                                                                name="search"
                                                                autoComplete="search"
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <Search className={classes.searchIcon}/>
                                                                        </InputAdornment>
                                                                    )
                                                                }}
                                                                value={searchNumber}
                                                                onChange={(e) => setSearchNumber(e.target.value)}
                                                                autoFocus
                                                            />
                                                        </GridItem>
                                                        <div>
                                                            <br></br>
                                                        </div>
                                                        <GridItem xs={12} sm={12} md={12}>
                                                            <Button
                                                                disabled={!isEnabled}
                                                                type="submit"
                                                                fullWidth
                                                                variant="contained"
                                                                color="info"
                                                                className={classes.submit}
                                                            >
                                                                Submit Search
                                                            </Button>
                                                        </GridItem>
                                                    </cardBody>
                                                </form>
                                            </Card>
                                            {/*<GridItem xs={12} sm={12} md={12}>*/}
                                            {/*    <h4 className=*/}
                                            {/*            {themeSelector.someProp === 'dark' ? productDarkClasses.title : themeSelector.someProp === 'meme' ? productMemeClasses.title : productClasses.title}>*/}
                                            {/*        Search Results Below:*/}
                                            {/*    </h4>*/}
                                            {/*</GridItem>*/}
                                        </GridItem>
                                    </GridContainer>
                                    {/*<GridContainer justify={"center"}>*/}

                                    {/*    {courses.map(course =>*/}
                                    {/*        <GridItem xs={12} sm={12} md={8}>*/}

                                    {/*            {search === course._course_name ?*/}
                                    {/*                <Link to={"/class-page/" + course._course_id}>*/}
                                    {/*                <Button*/}
                                    {/*                    fullWidth*/}
                                    {/*                    variant="contained"*/}
                                    {/*                    color="success"*/}
                                    {/*                >*/}

                                    {/*                        {course._course_num}&nbsp;{course._course_name}&nbsp;-&nbsp;{course._course_description}*/}

                                    {/*                </Button>*/}
                                    {/*                </Link>:*/}
                                    {/*                <Button*/}
                                    {/*                    disabled*/}
                                    {/*                    fullWidth*/}
                                    {/*                    variant="contained"*/}
                                    {/*                >*/}
                                    {/*                    {course._course_num}&nbsp;{course._course_name}&nbsp;-&nbsp;{course._course_description}*/}
                                    {/*                </Button>*/}
                                    {/*            }*/}

                                                {/*<GridItem xs={12} sm={12} md={11}>*/}
                                                {/*    {search === course._course_name ?*/}
                                                {/*        <Link to="/class-page">*/}
                                                {/*            <h4 className=*/}
                                                {/*                    {themeSelector.someProp === 'dark' ? productDarkClasses.title : themeSelector.someProp === 'meme' ? productMemeClasses.title : productClasses.title}>*/}
                                                {/*                {course._course_name} {course._course_num}*/}

                                                {/*            </h4>*/}
                                                {/*        </Link> :*/}

                                                {/*            <h4 className=*/}
                                                {/*                    {themeSelector.someProp === 'dark' ? productDarkClasses.title : themeSelector.someProp === 'meme' ? productMemeClasses.title : productClasses.title}>*/}

                                                {/*            </h4>*/}

                                                {/*    }*/}


                                                {/*    {courseDescription === course._course_description?*/}
                                                {/*        <p className=*/}
                                                {/*               {themeSelector.someProp === 'dark' ? productDarkClasses.description : themeSelector.someProp === 'meme' ? productMemeClasses.description : productClasses.description}>*/}
                                                {/*            {course._course_description}*/}
                                                {/*        </p> :*/}
                                                {/*        <p className=*/}
                                                {/*               {themeSelector.someProp === 'dark' ? productDarkClasses.description : themeSelector.someProp === 'meme' ? productMemeClasses.description : productClasses.description}>*/}

                                                {/*        </p>*/}
                                                {/*    }*/}
                                                {/*</GridItem>*/}
                                        {/*     </GridItem>*/}
                                        {/*)}*/}

                                        {/*    <Button*/}
                                        {/*        fullWidth*/}
                                        {/*        variant="contained"*/}
                                        {/*        color="success"*/}
                                        {/*    >*/}
                                        {/*        {courseName}&nbsp;{courseNum}&nbsp;-&nbsp;{courseDescription}*/}
                                        {/*    </Button>*/}

                                        {/*    <Button*/}
                                        {/*        fullWidth*/}
                                        {/*        variant="contained"*/}
                                        {/*        color="success"*/}
                                        {/*    >*/}
                                        {/*        SENG 471 - Software Requirements Engineering*/}
                                        {/*    </Button>*/}

                                        {/*    <Button*/}
                                        {/*        fullWidth*/}
                                        {/*        variant="contained"*/}
                                        {/*        color="success"*/}
                                        {/*    >*/}
                                        {/*        SENG 438 - Software Testing, Reliability, and Quality*/}
                                        {/*    </Button>*/}

                                        {/*    <Button*/}
                                        {/*        fullWidth*/}
                                        {/*        variant="contained"*/}
                                        {/*        color="success"*/}
                                        {/*    >*/}
                                        {/*        ENCM 511 - Embedded System Interfacing*/}
                                        {/*    </Button>*/}

                                        {/*    <Button*/}
                                        {/*        fullWidth*/}
                                        {/*        variant="contained"*/}
                                        {/*        color="success"*/}
                                        {/*    >*/}
                                        {/*        CPSC 457 - Principles of Operating Systems*/}
                                        {/*    </Button>*/}

                                        {/*    <Button*/}
                                        {/*        fullWidth*/}
                                        {/*        variant="contained"*/}
                                        {/*        color="success"*/}
                                        {/*    >*/}
                                        {/*        CPSC 441 - Computer Networks*/}
                                        {/*    </Button>*/}

                                        {/*</GridItem>*/}
                                    {/*</GridContainer>*/}
                                    <div>
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}