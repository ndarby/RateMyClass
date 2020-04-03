/*
*  ATTRIBUTE SECTION PAGE
*  Section Included Under: CoursePage/Sections
*
*  This page displays the Attributes of Ratings and Tags for the course
*
* */

import React, {useState, useEffect} from "react";

// @material-ui/core components
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';


import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {useParams} from "react-router";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// theme styles
import themeSelector from "../../Aesthetic/ThemeSelector";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

// rating icons
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from "@material-ui/lab/Rating";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";

// light, dark, and meme styles
const useStyles = makeStyles(styles);

// colors for the individual styles
const StyledRating = withStyles({
    iconFilled: {
        color: '#033285',
    },
    iconHover: {
        color: '#033285',
    },

})(Rating);

const StyledDarkRating = withStyles({
    iconFilled: {
        color: '#00BFFF',
    },
    iconHover: {
        color: '#00BFFF',
    },
    iconEmpty: {
        color: '#007399'
    }
})(Rating);

const StyledMemeRating = withStyles({
    iconFilled: {
        color: '#ff0000',
    },
    iconHover: {
        color: '#ff0000',
    },
    iconEmpty: {
        color: '#800000'
    }
})(Rating);

//helpers for rating icons
function IconContainer(props) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon/>,
        label: 'Very Satisfied',
    },
};


export default function ReviewSection() {
    // constant variables
    const classes = useStyles();

    /* card formatting */
    const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);


    // variables for attributes retrieved from the back end
    const [course, setCourse] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [attrData, setAttrData] = useState({});
    let {course_id} = useParams();

    //get attributes from the back end
    useEffect(() => {
        const fetchData = async () => {

            fetch("/api/attributes_get/get/" + course_id, {
                "method": "GET",
                "headers": {}
            }).then(response => response.json())
                .then(response => {

                    setCourse(response);
                    setAttrData(response.tags);
                    setIsLoaded(true);
                })
                .catch(err => {
                    console.log(err);
                });

        };
        fetchData();
    }, []);

    //if attributes could not load from the backend
    if (!isLoaded) {
        return (
            <h5 className= {classes.title}>
                Unable to Load Ratings and Tags
            </h5>
        );
    } else {
    // if attributes loaded properly from the back end
    return (
        //theme specific rating layout
        <div className={classes.root}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimation]}>
                        <CardHeader color="info" className={classes.cardHeader}>
                            <h5 className= {classes.title}>
                                Overall Rating:
                            </h5>
                        </CardHeader>
                    </Card>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend"> </Typography>
                        {/* rating style dependant on theme, rating retrieved from backend*/}
                        {themeSelector.someProp === 'dark' ?
                            <StyledDarkRating
                                name="customized-icons"
                                defaultValue={course.rating == null ? 3 : course.rating} //rating from backend
                                getLabelText={value => customIcons[value].label}
                                IconContainerComponent={IconContainer}
                                readOnly
                            >Current Course Rating</StyledDarkRating> :

                            themeSelector.someProp === 'meme' ?
                                <StyledMemeRating
                                    name="customized-icons"
                                    defaultValue={course.rating == null ? 3 : course.rating} //rating from backend
                                    getLabelText={value => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                    readOnly
                                >Current Course Rating</StyledMemeRating> :

                                <StyledRating
                                    name="customized-icons"
                                    defaultValue={course.rating == null ? 3 : course.rating} //rating from backend
                                    getLabelText={value => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                    readOnly
                                >Current Course Rating</StyledRating>
                        }
                    </Box>
                </GridItem>
                {/*layout for tags retrieved from backend*/}
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimation]}>
                        <CardHeader color="info" className={classes.cardHeader}>
                            <h5 className={classes.title}>
                                Related Tags:
                            </h5>
                        </CardHeader>
                    </Card>
                        <div className={classes.root}>
                            {/*lists all tags for the specified course, retrieved from the backend, with styling from specified theme*/}
                            {attrData == null ? console.log("No attributes found") :
                                attrData.map((data) => {
                                let icon;
                                return(
                                    <Chip
                                        icon={icon}
                                        className={classes.root}
                                        color={themeSelector.someProp === 'dark' ? "inherit" : themeSelector.someProp === 'meme' ? "secondary" : "primary"}
                                        label={data}
                                        variant={"default"}
                                    />
                                );
                            })}
                        </div>
                    <br></br>
                </GridItem>
            </GridContainer>
        </div>
    );
    }
}