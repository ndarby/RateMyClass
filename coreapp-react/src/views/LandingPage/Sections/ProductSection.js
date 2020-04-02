/*
*  PRODUCT SECTION PAGE
*  Section Included Under: LandingPage
*
*  This page displays the Courses in the Course Catalogue
*
* */

import React, {useState, useEffect} from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import classNames from "classnames";
import {Link} from "react-router-dom";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";

/* Selects which theme to use */
import themeSelector from "../../Aesthetic/ThemeSelector";
/* Styles for the different themes */
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";

/* theme specific styles */
const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
    /* constant variables */
    const [searchResults, setSearchResults] = useState('');
    const [courses, setCourses] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    /* constant variable for filtered courses using the search bar */
    const filteredCourses = courses.filter(course => course._course_num === searchResults.toUpperCase() || course._course_name === searchResults.toUpperCase() || course._course_name + ' ' + course._course_num === searchResults.toUpperCase() || course._course_description.toUpperCase() === searchResults.toUpperCase());

    /* get courses from the backend */
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

    /* theme specific classes */
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    /* image formatting */
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );

    /* card formatting */
    const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);

    /* if the courses could not load from the backend*/
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
                        Failure when loading courses...
                    </h5>
                </GridItem>
        </GridContainer>
        );
    } else {
        /* if courses could load from the backend */
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    {/*theme specific titles*/}
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className=
                                {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                            Course Catalogue
                        </h2>
                        {/*theme specific descriptions*/}
                        <h5 className=
                                {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                            Select a Course from the List Below or Search for a Course in the Search Bar
                        </h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card className={classes[cardAnimation]}>
                            <cardBody>
                                {/*search bar to find courses*/}
                                <GridItem xs={12} sm={12} md={12}>
                                    <TextField
                                        variant="standard"
                                        margin="normal"
                                        id="search"
                                        fullWidth
                                        label="Search Bar"
                                        name="search"
                                        autoComplete="search"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Search className={classes.searchIcon}/>
                                                </InputAdornment>
                                            )
                                        }}
                                        value={searchResults}
                                        onChange={(e) => setSearchResults(e.target.value)}
                                    />
                                </GridItem>
                                <br></br>
                            </cardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <div>
                    {/*if not searching for courses, show the entire course catalogue. If searching for courses, show filtered course catalogue*/}
                    {searchResults === '' ?
                        <GridContainer>
                            {courses.map(course =>
                                <GridItem xs={12} sm={12} md={4}>
                                    <br></br>
                                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                        <Link to={"/class-page/" + course._course_id}>
                                            <img src=
                                                     {themeSelector.someProp === 'dark' ? course._course_img.dark : themeSelector.someProp === 'meme' ? course._course_img.meme  : course._course_img.light }
                                                 alt="..." className={imageClasses} height={"300px"} width={"300px"}/>

                                        </Link>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={11}>
                                        <Link to="/class-page">
                                            <h4 className=
                                                    {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                                                {course._course_name} {course._course_num}

                                            </h4>
                                        </Link>
                                        <p className=
                                               {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                                            {course._course_description}
                                        </p>
                                    </GridItem>
                                </GridItem>
                            )}
                        </GridContainer> :
                        <GridContainer>
                            {filteredCourses.map(course =>
                                <GridItem xs={12} sm={12} md={4}>
                                    <br></br>
                                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                        <Link to={"/class-page/" + course._course_id}>
                                            <img src=
                                                     {themeSelector.someProp === 'dark' ? course._course_img.dark : themeSelector.someProp === 'meme' ? course._course_img.meme  : course._course_img.light }
                                                 alt="..." className={imageClasses} height={"300px"} width={"300px"}/>

                                        </Link>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={11}>
                                        <Link to="/class-page">
                                            <h4 className=
                                                    {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                                                {course._course_name} {course._course_num}

                                            </h4>
                                        </Link>
                                        <p className=
                                               {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                                            {course._course_description}
                                        </p>
                                    </GridItem>
                                </GridItem>
                            )}
                        </GridContainer>
                    }
                </div>
            </div>
        );
    }
}
