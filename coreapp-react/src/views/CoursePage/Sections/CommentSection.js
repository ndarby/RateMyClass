/*
*  COMMENT SECTION PAGE
*  Section Included Under: CoursePage/Sections
*
*  This page displays the Comments for the course
*
* */

import React, {useEffect, useState} from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ReplyIcon from '@material-ui/icons/Reply';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";


const useStyles = makeStyles(styles);

export default function CommentSection(props) {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [reviewIDReply, setReviewIDReply] = React.useState();
    const [parentIDReply, setPrentIDReply] = React.useState();

    const [comment_body, set_comment_body] = useState(undefined);

    // adapted from https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children
    function Comment({comment}) {
        const [open, setOpen] = React.useState(true);

        const classes = useStyles();

        const nestedComments = (comment.children || []).map(comment => {
            return <Comment key={comment._comment_id} comment={comment} type="child"/>
        });

        return (

            <span>
            <ListItem button className={classes.nested}>
                <ListItemText primary={comment._account_credentials.first_name + " " +comment._account_credentials.last_name} secondary={comment._comment_body}/>
                <ListItemSecondaryAction>
                    <IconButton style={isNotLoggedIn ? {display: "none"} : {}} onClick={() => handleClickOpen(props.review_id, comment._comment_id)} edge="end" aria-label="delete">
                        <ReplyIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{marginLeft: "40px",  background: "rgba(0, 0, 0, 0.025)"}}>
                    {nestedComments}
                </List>
            </Collapse>
        </span>
        )
    }

    const account = JSON.parse(localStorage.getItem('account'));
    const isNotLoggedIn = account === undefined || account === null;
    /* nothing can be submitted if field is not filled out */
    const isEnabled = comment_body !== undefined && comment_body !== '';

    /* submission of form information */
    const handleSubmit = () => {
        console.log(reviewIDReply);
        console.log(parentIDReply);

        const body = {
            review_id: reviewIDReply,
            user_id: account._account_id,
            parent_id: parentIDReply,
            comment_body: comment_body
        }

        console.log(body);

        fetch("/api/comments/new", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(body)
        })
            .then(response => {
                console.log(response);
                setOpen(false);
                //TODO use state instead
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err);
            });
    }


    const handleClickOpen = (review_id, parent_id) => {
        setReviewIDReply(review_id);
        setPrentIDReply(parent_id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setReviewIDReply(undefined);
        setPrentIDReply(undefined);
    };

    useEffect(() => {
        const fetchData = async () => {
            fetch("/api/comments_get/get/"+props.review_id, {
                "method": "GET",
                "headers": {}
            }).then(r =>  r.json().then(data => ({status: r.status, body: data})))
                .then(response => {
                    if(response.status === 200) {
                        setComments(response.body);
                        setIsLoaded(true);
                    }
                })
                .catch(err => {
                    setIsLoaded(false);

                    console.log(err);
                });

        };
        fetchData();
    }, []);

    if (!isLoaded) {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h6 className={classes.title}>
                        Comments not available
                    </h6>
                </GridItem>
            </GridContainer>
        )
    } else {
        return (
                <Card>
                    <div>
                        <Dialog  fullWidth={true} maxWidth="400px" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogContent>
                                <DialogContentText>
                                </DialogContentText>
                            <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                            <TextField
                                id="comment_body"
                                label="Comment"
                                multiline
                                fullWidth={true}
                                rows="6"
                                required
                                placeholder="Remember, be kind!"
                                variant="outlined"
                                onChange={(e) => set_comment_body(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button disabled={!isEnabled} onClick={handleSubmit} color="primary">
                                Reply
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                    <CardActions>
                        <Button style={isNotLoggedIn ? {display: "none"} : {}} variant="outlined" color="primary" size="small" onClick={() => handleClickOpen(props.review_id, null)}>Reply</Button>
                    </CardActions>
                    <CardContent>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} lg={12}>
                                <List
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                            {comments.length === 0 && "No"} Comments
                                        </ListSubheader>
                                    }
                                    className={classes.root}>
                                    {comments.map((comment) => {
                                        return <Comment key={comment._comment_id} comment={comment}/>;
                                    })}
                                </List>
                            </GridItem>
                        </GridContainer>
                    </CardContent>
                </Card>
        );
    }
}
