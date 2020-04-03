/*
*  LOGIN PAGE
*
*  This page is the first page to be shown for RateMyClass.
*  Users can login with an existing account, can redirect to sign up for a new account, or continue on as a guest
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
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import themeSelector from "../Aesthetic/ThemeSelector";

/* Selector for if the user has an account or not */
import viewSelector from "../Aesthetic/ViewSelector";

/* style formatter */
import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    /* reset the application so no account is remembered */
    localStorage.removeItem('account');

    /* constant variables */
    const [mail, setMail] = useState(undefined);
    const [word, setWord] = useState(undefined);

    /* nothing can be submitted if field is not filled out */
    const isEnabled = mail !== undefined && word !== undefined && mail !== '' && word !== '';

    /* submission of form information */
    const handleSubmit = (evt) => {
        evt.preventDefault();

        /* change theme default to light mode and indicate an account is used */
        themeSelector.someProp = 'light';
        viewSelector.someProp = 'account';

        /* login credentials */
        let body = {
            mail: mail,
            word: word
        };

        /* authenticate login credentials with backend */
        fetch("/api/accounts/authenticate", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(body)
        })
            .then(r =>  r.json().then(data => ({status: r.status, body: data})))
            .then(response => {
                if(response.status === 200) {
                    console.log( response.body);
                    localStorage.setItem("account", JSON.stringify(response.body));
                    props.history.push('/landing-page');
                } else {
                    alert('Invalid Credentials!');
                }
            })
            .catch(err => {
                alert("Error!");
                console.error(err);
            });
    };

    /* redirect to landing page, change theme default to light mode, and indicate an account is not used */
    const guestSubmit = (evt) => {
        evt.preventDefault();
        themeSelector.someProp = 'light';
        viewSelector.someProp = 'guest';
        props.history.push('/landing-page');
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
                  {/*form to use to login*/}
                <form className={classes.form} noValidate onSubmit={handleSubmit}
                      onKeyPress={event => {
                            if (event.which === 13 /* Enter */) {
                                event.preventDefault();
                            }}}
                >
                    {/*card title*/}
                    <CardHeader color="info" className={classes.cardHeader}>
                        <h3><b>RateMyClass</b></h3>
                    </CardHeader>
                    {/*card descriptor*/}
                    <h4 className={classes.divider}><b>Login</b></h4>
                    <CardBody>
                        {/*email field*/}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            autoFocus
                        />
                        {/*password field*/}
                        <TextField
                            variant="outlined"
                            margin="normal"
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
                        {/*submit form*/}
                        <Button
                            disabled={!isEnabled}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="info"
                            className={classes.submit}
                        >
                            Get Started
                        </Button>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        <Grid container>
                            {/*guest option*/}
                            <Grid item xs>
                                <Button
                                    simple color="info"
                                    size="sm"
                                    variant="contained"
                                    onClick={guestSubmit}
                                >
                                    Continue as Guest
                                </Button>
                            </Grid>
                            {/*sign up option*/}
                            <Grid item>
                                <Link to = "/sign-up-page" variant="body2">
                                    <Button simple color="info" size="sm" variant="contained">
                                        {"Don't have an account? Sign Up"}
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
