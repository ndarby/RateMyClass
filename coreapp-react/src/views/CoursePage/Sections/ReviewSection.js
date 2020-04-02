import React, {useState, useEffect} from 'react';
import {useParams} from "react-router";

// @material-ui/core components
import {makeStyles, withStyles} from "@material-ui/core/styles";
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
import ChipInput from 'material-ui-chip-input'



//IMPORT STUFF HERE

import CommentSection from "./CommentSection.js";
import AttributeSection from "./AttributeSection.js";
import GridContainer from "../../../components/Grid/GridContainer";
import Grid from '@material-ui/core/Grid';
import GridItem from "../../../components/Grid/GridItem";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(styles);

const StyledRating = withStyles({
    iconFilled: {
        color: '#033285',
    },
    iconHover: {
        color: '#033285',
    },
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


IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};


export default function ReviewSection() {
    const classes = useStyles();
    let {course_id} = useParams();
    const account = JSON.parse(localStorage.getItem('account'));
    const isNotLoggedIn = account === undefined || account === null;
    //GET REVIEWS FROM THE BACK END HERE

    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [open, setOpen] = React.useState(false);



    //new review fields
    /* constant variables */
    const [review_title, set_review_title] = useState(undefined);
    const [prof_name, set_prof_name] = useState(undefined);
    const [rating, set_rating] = useState(3);
    const [tags, set_tags] = useState([]);
    const [review_body, set_review_body] = useState(undefined);

    /* nothing can be submitted if field is not filled out */
    const isEnabled = review_title !== undefined && prof_name !== undefined  && review_body !== undefined && review_title !== '' && prof_name !== ''  && review_body !== '';

    /* submission of form information */
    const handleSubmit = () => {
        console.log(review_title);
        console.log(prof_name);
        console.log(rating);
        console.log(tags);
        console.log(review_body);

        let body = {
            course_id: course_id,
            user_id: account._account_id,
            prof_name: prof_name,
            review_title: review_title,
            review_body: review_body,
            rating: rating,
            tags: tags
        };
        console.log(body);
        fetch("/api/reviews/new", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(body)
        })
            .then(response => {
                handleClose();

                //TODO use state instead
                window.location.reload(false);

                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




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
                    <Button style={isNotLoggedIn ? {display: "none"} : {}} variant="contained" color="primary" onClick={handleClickOpen}>
                        New Review
                    </Button>






                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">New Review</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please fill out the fields below:
                            </DialogContentText>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <TextField
                                        autoFocus
                                        id="review_title"
                                        label="Review Title"
                                        type="text"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={(e) => set_review_title(e.target.value)}
                                    />
                                    <br/><br/>

                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        id="prof_name"
                                        label="Instructor Name"
                                        type="text"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={(e) => set_prof_name(e.target.value)}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6} lg={6}>
                                    <Typography id="discrete-slider" gutterBottom>
                                        Rating
                                    </Typography>
                                    <Slider
                                        defaultValue={3}
                                        id="rating"
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        aria-required
                                        step={1}
                                        marks
                                        min={1}
                                        max={5}
                                        onChange={(e, v) => set_rating(v)}
                                    />
                                    <br/><br/>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <Typography id="discrete-slider" gutterBottom>
                                        Course Tags
                                    </Typography>
                                    <ChipInput
                                        fullWidth={true}
                                        onChange={(e) => set_tags(e)}
                                    />
                                    <br/><br/>
                                </GridItem>

                                <GridItem xs={12} sm={12} md={12} lg={12}>
                                    <TextField
                                        id="review_body"
                                        label="Review"
                                        multiline
                                        fullWidth={true}
                                        rows="6"
                                        required
                                        placeholder="Warn your peers to run, or praise an amazing class. It is your call."
                                        variant="outlined"
                                        onChange={(e) => set_review_body(e.target.value)}
                                    />
                                </GridItem>

                            </GridContainer>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button disabled={!isEnabled} onClick={handleSubmit} color="primary">
                                Add Review
                            </Button>
                        </DialogActions>
                    </Dialog>






                </CardContent>
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
                                                        {review._account_credentials._first_name + " " +review._account_credentials._last_name}
                                                    </b> <br/>
                                                    {review._date_posted.split('T')[0]}

                                                </h6>
                                            </Grid>
                                        </Grid>

                                        <Grid  container className={classes.root} spacing={2}>
                                            <Grid item xs={12} md={6} lg={6}>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    <Box component="fieldset" mb={0} borderColor="transparent">
                                                        <StyledRating
                                                            name="customized-icons"
                                                            defaultValue={review._rating}
                                                            getLabelText={value => customIcons[value].label}
                                                            IconContainerComponent={IconContainer}
                                                            readOnly
                                                        >Current Course Rating</StyledRating>
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
