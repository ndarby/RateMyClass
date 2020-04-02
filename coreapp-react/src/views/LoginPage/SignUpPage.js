/*
*  SIGN UP PAGE
*
*  When users want an account for RateMyClass but do not have one yet.
*  Users can sign up for an account, or get redirected to login page if account is already made
*
* */

import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import image from "assets/img/RMC/login.jpg";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

/* theme style formatting */
import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

export default function SignUpPage(props) {
    /* constant variables */
    const [first, setFirst] = useState(undefined);
    const [last, setLast] = useState(undefined);
    const [mail, setMail] = useState(undefined);
    const [word, setWord] = useState(undefined);

    /* nothing can be submitted if field is not filled out */
    const isEnabled = mail !== undefined && word !== undefined && first !== undefined && last !== undefined && mail !== '' && word !== '' && first !== '' && last !== '';

    /* submission of form information */
    const handleSubmit = (evt) => {
        evt.preventDefault();

        /* Sign up credentials */
        let body = {
            first: first,
            last: last,
            mail: mail,
            word: word
        };

        /* send sign up credentials to the backend */
        fetch("/api/accounts/new", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(body)
        })
            .then(response => {
                props.history.push('/');
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });

    };

    /* card formatting */
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);

    /* style formatting */
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <div
                className={classes.pageHeader}
                /* theme specific backgrounds */
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>
                    <GridContainer  justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton]}>
                                {/*form to use to sign up*/}
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                    {/*card title*/}
                                    <CardHeader color="info" className={classes.cardHeader}>
                                        <h3><b>RateMyClass</b></h3>
                                    </CardHeader>
                                    {/*card descriptor*/}
                                    <h4 className={classes.divider}><b>Sign Up</b></h4>
                                    <CardBody>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            {/*first name field*/}
                                            <TextField
                                                autoComplete="fname"
                                                name="firstName"
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                value={first}
                                                onChange={(e) => setFirst(e.target.value)}
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*last name field*/}
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                value={last}
                                                onChange={(e) => setLast(e.target.value)}
                                                autoComplete="lname"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*email field*/}
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={mail}
                                                onChange={(e) => setMail(e.target.value)}
                                                autoComplete="email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {/*password field*/}
                                            <TextField
                                                variant="outlined"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                value={word}
                                                onChange={(e) => setWord(e.target.value)}
                                                autoComplete="current-password"
                                            />
                                        </Grid>
                                    </Grid>
                                    {/*space for aesthetics*/}
                                    <div> <br></br></div>
                                    {/*submit form*/}
                                    <Button
                                        disabled={!isEnabled}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="info"
                                        className={classes.submit}
                                    >
                                        Sign Up
                                    </Button>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                    <Grid container justify="flex-end">
                                        {/*redirect to login page if already have account*/}
                                        <Grid item>
                                            <Link to = "/" variant="body2">
                                                <Button simple color="info" size="sm" variant="contained">
                                                    Already have an account? Log In
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
