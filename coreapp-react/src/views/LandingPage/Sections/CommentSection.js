import React, {useEffect, useState} from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

//IMPORT STUFF HERE

const useStyles = makeStyles(styles);

// adapted from https://coderrocketfuel.com/article/recursion-in-react-render-comments-with-nested-children
function Comment({comment}) {
    console.log(comment);
    const nestedComments = (comment.children || []).map(comment => {
        return <Comment key={comment._comment_id} comment={comment} type="child"/>
    });
    console.log(nestedComments);

    return (
        <div style={{"text-align: left; marginLeft": "25p x", "marginTop": "10px"}}>
            <div>{comment._comment_body}</div>
            {nestedComments}
        </div>
    )
}

export default function CommentSection() {
    const classes = useStyles();

    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            fetch("/api/comments_get/get/1", {
                "method": "GET",
                "headers": {}
            }).then(response => response.json())
                .then(response => {
                    setIsLoaded(true);
                    setComments(response);
                    console.log(response)
                })
                .catch(err => {
                    console.log(err);
                });

        };
        fetchData();
    }, []);

    if (!isLoaded) {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h5 className={classes.title}>
                        <div>
                            lol sorry no comments loser
                        </div>
                    </h5>
                </GridItem>
            </GridContainer>
        )
    } else {
        return (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h5 className={classes.title}>
                        {/*<div>*/}

                        {/*    {comments.map(comment =>*/}
                        {/*    <Comment key={comment._comment_id} comment={comment}/>*/}
                        {/*    )}*/}

                        {/*    /!*{comments.map(comment =>*!/*/}
                        {/*    /!*    <h4>{comment._comment_body}</h4>*!/*/}
                        {/*    /!*)}*!/*/}
                        {/*</div>*/}
                        <div>
                            {comments.map((comment) => {
                                return <Comment key={comment._comment_id} comment={comment}/>;
                            })}
                        </div>
                    </h5>
                </GridItem>
            </GridContainer>
        );
    }
}
