import React, {useEffect, useState} from 'react';
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

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

export default function ProductSection() {
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

    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );
    if (!isLoaded) {
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
                            Select a Course from the list below
                        </h5>
                    </GridItem>
                </GridContainer>
                <div>
                    <br></br>
                    <GridContainer>
                        {courses.map(course =>
                            <GridItem xs={12} sm={12} md={4}>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <Link to={"/class-page/" + course._course_id}>
                                        <img src=
                                                 {themeSelector.someProp === 'dark' ? course._course_img.dark : themeSelector.someProp === 'meme' ? course._course_img.meme : course._course_img.light}
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
                </div>
            </div>
        );
    }
}
