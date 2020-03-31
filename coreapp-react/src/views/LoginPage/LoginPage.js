import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";


import image from "assets/img/RMC/login.jpg";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Redirect from "react-router-dom/es/Redirect";
import Check from "@material-ui/icons/Check";
import {Renderer as checked} from "jss";
import themeSelector from "../SettingsPage/ThemeSelector";
import viewSelector from "../ViewSelector";
import loginInformation from "../LoginInformation";
import accountInformation from "../AccountInformation";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
    localStorage.removeItem('account');
    const [mail, setMail] = useState(undefined);
    const [word, setWord] = useState(undefined);

    const isEnabled = mail !== undefined && word !== undefined && mail !== '' && word !== '';

    const handleSubmit = (evt) => {
        evt.preventDefault();

        accountInformation.first = 'Default First';
        accountInformation.last = 'Default Second';

        alert(`Submitting Email: ${mail}`);
        loginInformation.mail = mail;
        accountInformation.mail = mail;
        alert(`Submitting Password: ${word}`);
        loginInformation.word = word;
        accountInformation.word = word;

        themeSelector.someProp = 'light';
        viewSelector.someProp = 'account';

        let body = {
            mail: mail,
            word: word
        };

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

    const guestSubmit = (evt) => {
        evt.preventDefault();
        themeSelector.someProp = 'light';
        viewSelector.someProp = 'guest';
        props.history.push('/landing-page');
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
                <form className={classes.form} noValidate onSubmit={handleSubmit} >
                    <CardHeader color="info" className={classes.cardHeader}>
                        <h3><b>RateMyClass</b></h3>
                    </CardHeader>
                    <h4 className={classes.divider}><b>Login</b></h4>
                    <CardBody>
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
                        <Grid item xs>
                            {/*<Link to = "/landing-page" variant="body2">*/}
                                <Button
                                    simple color="info"
                                    size="sm"
                                    variant="contained"
                                    onClick={guestSubmit}
                                >
                                    Continue as Guest
                                </Button>
                            {/*</Link>*/}
                        </Grid>
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
