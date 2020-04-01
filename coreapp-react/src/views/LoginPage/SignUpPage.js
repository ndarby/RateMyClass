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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/RMC/login.jpg";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(styles);

export default function SignUpPage(props) {
    const [first, setFirst] = useState(undefined);
    const [last, setLast] = useState(undefined);
    const [mail, setMail] = useState(undefined);
    const [word, setWord] = useState(undefined);

    const isEnabled = mail !== undefined && word !== undefined && first !== undefined && last !== undefined && mail !== '' && word !== '' && first !== '' && last !== '';

    const handleSubmit = (evt) => {
        evt.preventDefault();

        let body = {
            first: first,
            last: last,
            mail: mail,
            word: word
        };

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


    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <div
                className={classes.pageHeader}
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
                                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                    <CardHeader color="info" className={classes.cardHeader}>
                                        <h3><b>RateMyClass</b></h3>
                                    </CardHeader>
                                    <h4 className={classes.divider}><b>Sign Up</b></h4>
                                    <CardBody>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
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

                                    <div> <br></br></div>

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
