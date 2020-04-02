import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

/* Selects which theme to use */
import themeSelector from "../../SettingsPage/ThemeSelector";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProductStyle.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProductStyle.js";

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

import classNames from "classnames";

import ReviewSection from "./ReviewSection.js";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

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

// const Comment = React.createClass({
//   render() {
//     const comment = this.props.comment;
//     return <div>
//       <div dangerouslySetInnerHTML={{__html: comment.comment_text}}/>
//       {comment.children.length > 0 && comment.children.map((child) => {
//         return <Comment key={child.id} comment={child}/>
//       })}
//     </div>
//   }
// });

function IconContainer(props) {
    const {value, ...other} = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

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

// create function with a get request here to be used and displayed below

export default function ProductSection() {
    const classes = useStyles();
    const darkClasses = useDarkStyles();
    const memeClasses = useMemeStyles();

    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRounded,
        classes.imgFluid
    );
    // console.log(this.props.match.params.course_id);
    let { course_id } = useParams();
    console.log(course_id);

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className=
                            {themeSelector.someProp === 'dark' ? darkClasses.title : themeSelector.someProp === 'meme' ? memeClasses.title : classes.title}>
                        Course Information
                    </h2>
                    <h5 className=
                            {themeSelector.someProp === 'dark' ? darkClasses.description : themeSelector.someProp === 'meme' ? memeClasses.description : classes.description}>
                        View Current Ratings or Leave a Review Below!
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend"> </Typography>
                    {themeSelector.someProp === 'dark' ?
                        <StyledDarkRating
                            name="customized-icons"
                            defaultValue={3} //CHANGE VALUE TO VALUE FROM BACK END HERE
                            getLabelText={value => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        >Current Course Rating</StyledDarkRating> :

                        themeSelector.someProp === 'meme' ?
                        <StyledMemeRating
                            name="customized-icons"
                            defaultValue={3} //CHANGE VALUE TO VALUE FROM BACK END HERE
                            getLabelText={value => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        >Current Course Rating</StyledMemeRating> :

                        <StyledRating
                            name="customized-icons"
                            defaultValue={3} //CHANGE VALUE TO VALUE FROM BACK END HERE
                            getLabelText={value => customIcons[value].label}
                            IconContainerComponent={IconContainer}
                        >Current Course Rating</StyledRating>

                    }
                </Box>
                {/*reviews displayed here*/}
                <ReviewSection/>

            </div>
        </div>
    );
}
