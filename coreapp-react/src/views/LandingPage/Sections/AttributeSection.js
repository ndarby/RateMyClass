import React, {useState, useEffect} from "react";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Chip from '@material-ui/core/Chip';

//IMPORT STUFF HERE


import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {useParams} from "react-router";

const useStyles = makeStyles(styles);



export default function ReviewSection() {
    const classes = useStyles();
    //GET ATTRIBUTES FROM THE BACK END HERE

    const [course, setCourse] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [attrData, setAttrData] = useState({});
    //these need to be loaded in the form of:
    //{key: 0, label: 'tagTextHere'}, {key: 1, label: 'nextTagTextHere'}, and so on...

    let {course_id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            //FIX THIS, NEEDS TO ASK FOR ATTRIBUTES
            fetch("/api/courses/get/" + course_id, {
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

    if (!isLoaded) {
        return (
            <h1 className={classes.root}>
                Unable to Load Tags
            </h1>
        );
    } else {

        return (

            <div className={classes.root}>
                <Chip label="Basic" variant="outlined"/>

                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>
                            Related Tags:
                        </h2>
                        {attrData.map((data) => {
                            let icon;

                            return(
                                <Chip
                                    key={data.key}
                                    icon={icon}
                                    label={data.label}
                                    className={classes.root}
                                />
                            );
                        })}
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}