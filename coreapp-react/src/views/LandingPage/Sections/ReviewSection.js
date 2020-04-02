import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Chip from '@material-ui/core/Chip';


//IMPORT STUFF HERE

import CommentSection from "./CommentSection.js";
import AttributeSection from "./AttributeSection.js";
import GridContainer from "../../../components/Grid/GridContainer";
import Grid from '@material-ui/core/Grid';
import GridItem from "../../../components/Grid/GridItem";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(styles);

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

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};


export default function ReviewSection() {
    const classes = useStyles();
    //GET REVIEWS FROM THE BACK END HERE

    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let {course_id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            fetch("/api/reviews_get/get/" + course_id, {
                "method": "GET",
                "headers": {}
            }).then(r =>  r.json().then(data => ({status: r.status, body: data})))
                .then(response => {
                    if(response.status === 200) {
                        setReviews(response.body);
                        setIsLoaded(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                });

        };
        fetchData();
    }, []);

    if (!isLoaded) {
        return (
            <h5 className={classes.title}>No reviews yet. How about making one?</h5>
        );
    } else {
        return (
            // //THE REVIEWS MAY LOOK BETTER AS A LIST, GRID CONTAINER IS JUST USED AS A PLACEHOLDER FOR NOW
            <Card style={{background: "#abf4f51a"}}>
                <CardContent>
                    <GridContainer justify="center">
                        {reviews.length === 0 &&
                        <h5 className={classes.title}>No reviews yet. How about making one?</h5>
                        }
                        {reviews.map(review =>
                            <GridItem xs={12} sm={12} md={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Grid  container className={classes.root} spacing={2}>

                                            <Grid item xs={12} md={4} lg={4}>
                                                <h4 style={{ marginTop: "0", textAlign: "left"}}>
                                                    Taken with: <i>{review._prof_name}</i>
                                                </h4>
                                            </Grid>
                                            <Grid item xs={12} md={4} lg={4}>
                                                <h3 style={{ marginTop: "0", textAlign: "center"}}>
                                                    {review._review_title}
                                                </h3>
                                            </Grid>
                                            <Grid item xs={12} md={4} lg={4}>
                                                <h6 style={{ marginTop: "0", textAlign: "right"}}>
                                                    <b style={{ marginTop: "0", textAlign: "right"}}>
                                                        {/*TODO fill this out with json*/}
                                                        Evan Krul
                                                    </b> <br/>
                                                    {review._date_posted.split('T')[0]}

                                                </h6>
                                            </Grid>
                                        </Grid>

                                        <Grid  container className={classes.root} spacing={2}>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    <Box component="fieldset" mb={0} borderColor="transparent">
                                                        <Rating
                                                            name="customized-icons"
                                                            defaultValue={review._rating}
                                                            getLabelText={value => customIcons[value].label}
                                                            IconContainerComponent={IconContainer}
                                                        >Current Course Rating</Rating>
                                                    </Box>

                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <Typography className={classes.pos} color="textSecondary">

                                                    {review._tags.map(tag =>
                                                        <Chip style={{ marginRight: "3px"}} label={tag} variant="outlined" />
                                                    )}
                                                </Typography>

                                            </Grid>

                                        </Grid>
                                        <Typography variant="body2" component="p" >
                                            <p style={{textAlign: "justify"}}>
                                                {review._review_body}
                                            </p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Reply</Button>
                                    </CardActions>
                                    {/*<h4>Comments</h4>*/}
                                    <CommentSection review_id={review._review_id}/>

                                </Card>
                                <br/>
                            </GridItem>
                        )}
                    </GridContainer>

                </CardContent>
            </Card>


        );
    }
}
