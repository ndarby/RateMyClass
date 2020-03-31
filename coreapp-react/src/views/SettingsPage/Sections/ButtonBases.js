import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import theme1 from "assets/img/RMC/light.jpg";
import theme2 from "assets/img/RMC/dark.jpg";
import theme3 from "assets/img/RMC/meme.jpg";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {Link} from "react-router-dom";
import themeSelector from "../ThemeSelector";



const image1 = [
    {
        url: theme1,
        title: 'Light',
        width: '33.33%',
    },
];
const image2 = [
    {
        url: theme2,
        title: 'Dark',
        width: '33.33%',
    },
];
const image3 = [
    {
        url: theme3,
        title: 'Meme',
        width: '33.33%',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function ButtonBases(props) {
    const classes = useStyles();
    const { ...rest } = props;

    const themeLight = (evt) => {
        evt.preventDefault();
        themeSelector.someProp = 'light';
    };

    const themeDark = (evt) => {
        evt.preventDefault();
        themeSelector.someProp = 'dark';
    };

    const themeMeme = (evt) => {
        evt.preventDefault();
        themeSelector.someProp = 'meme';
    };

    return (
        <div className={classes.section}>
            <div className={classes.root}>
                {image1.map(image => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                        onClick={themeLight}
                    >
                        <Link to={ "/settings-page"}>
                            <span
                                className={classes.imageSrc}
                                style={{
                                   backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />

                            <span className={classes.imageButton}>

                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                {image.title}
                                <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </Link>
                    </ButtonBase>
                ))}
                {image2.map(image => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                        onClick={themeDark}
                    >
                        <Link to = "/settings-page">
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />

                            <span className={classes.imageButton}>

                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </Link>
                    </ButtonBase>
                ))}
                {image3.map(image => (
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                        onClick={themeMeme}
                    >
                        <Link to = "/settings-page">
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />

                            <span className={classes.imageButton}>

                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </Link>
                    </ButtonBase>
                ))}
            </div>
        </div>
    );
}
