import React, {useState, useEffect} from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";


import classNames from "classnames";

import {Link} from "react-router-dom";
import themeSelector from "../../SettingsPage/ThemeSelector";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Search} from "@material-ui/icons";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
    const [searchResults, setSearchResults] = useState('');
    const [courses, setCourses] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const filteredCourses = courses.filter(course => course._course_num === searchResults || course._course_name === searchResults || course._course_name + ' ' + course._course_num === searchResults || course._course_description === searchResults);

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


    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );

    const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);

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
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className=
                                {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                            Course Catalogue
                        </h2>
                        <h5 className=
                                {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                            Select a Course from the List Below or Search for a Course in the Search Bar
                        </h5>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card className={classes[cardAnimation]}>
                            <cardBody>
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
