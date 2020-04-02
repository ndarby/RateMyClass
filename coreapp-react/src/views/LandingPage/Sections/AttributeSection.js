import React, {useState, useEffect} from "react";

// @material-ui/core components
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

//IMPORT STUFF HERE


import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {useParams} from "react-router";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import themeSelector from "../../SettingsPage/ThemeSelector";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from "@material-ui/lab/Rating";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

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
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    /* card formatting */
    const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);

    //GET ATTRIBUTES FROM THE BACK END HERE

    const [course, setCourse] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [rating, set_rating] = useState(3);
    // const [attrData, setAttrData] = useState({});
    //these need to be loaded in the form of:
    //{key: 0, label: 'tagTextHere'}, {key: 1, label: 'nextTagTextHere'}, and so on...
    const [attrData, setAttrData] = useState([{key: 0, label: 'tag1'}, {key: 1, label: 'tag2'}]);
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
                    setCourse(response.body);
                    setAttrData(response.body.tags);
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
                        {themeSelector.someProp === 'dark' ?
                            <StyledDarkRating
                                name="customized-icons"
                                defaultValue={3} //FIX GETTING VALUES BELOW
                                // value={ () =>{
                                //     if(course._rating < 6 && course._rating > 0){
                                //         return course._rating;
                                //     }else{
                                //         return 3;
                                //     }
                                // }
                                //
                                // }
                                getLabelText={value => customIcons[value].label}
                                IconContainerComponent={IconContainer}
                                readOnly
                            >Current Course Rating</StyledDarkRating> :

                            themeSelector.someProp === 'meme' ?
                                <StyledMemeRating
                                    name="customized-icons"
                                    defaultValue={3} //FIX GETTING VALUES BELOW
                                    // value={ () =>{
                                    //     if(course._rating < 6 && course._rating > 0){
                                    //         return course._rating;
                                    //     }else{
                                    //         return 3;
                                    //     }
                                    // }
                                    //
                                    // }
                                    getLabelText={value => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                    readOnly
                                >Current Course Rating</StyledMemeRating> :

                                <StyledRating
                                    name="customized-icons"
                                    defaultValue={3} //FIX GETTING VALUES BELOW
                                    // value={ () =>{
                                    //     if(course._rating < 6 && course._rating > 0){
                                    //         return course._rating;
                                    //     }else{
                                    //         return 3;
                                    //     }
                                    // }
                                    //
                                    // }
                                    getLabelText={value => customIcons[value].label}
                                    IconContainerComponent={IconContainer}
                                    readOnly
                                >Current Course Rating</StyledRating>

                        }
                    </Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <Card className={classes[cardAnimation]}>
                        <CardHeader color="info" className={classes.cardHeader}>
                            <h5 className={classes.title}>
                                Related Tags:
                            </h5>
                        </CardHeader>
                    </Card>
                        {/*<CardBody>*/}
                            <div className={classes.root} elevation={0}>
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
                            </div>
                        {/*</CardBody>*/}

                </GridItem>

            </GridContainer>
        </div>
    );
    }
}