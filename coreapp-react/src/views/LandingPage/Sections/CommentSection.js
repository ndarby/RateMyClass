import React, {useEffect, useState} from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography';
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ReplyIcon from '@material-ui/icons/Reply';


//IMPORT STUFF HERE

const useStyles = makeStyles(styles);

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
                <ListItemText primary="Evan Krul" secondary={comment._comment_body}/>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
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

export default function CommentSection(props) {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
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
