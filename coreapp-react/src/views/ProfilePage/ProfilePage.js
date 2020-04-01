import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import basicProfile from "assets/img/RMC/accountLogo.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProfilePage.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProfilePage.js";

import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import themeSelector from "../SettingsPage/ThemeSelector";
import backgroundLight from "assets/img/RMC/lightAccount.jpg";
import backgroundMeme from "assets/img/RMC/memeAccount.png";
import backgroundDark from "assets/img/RMC/darkAccount.jpg";
import lightFiller from "assets/img/RMC/lightBackground.jpg";
import darkFiller from "assets/img/RMC/darkBackground.jpg";
import memeFiller from "assets/img/RMC/memeBackground.jpg";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);


export default function ProfilePage(props) {
    const account = JSON.parse(localStorage.getItem('account'));

    const [first, setFirst] = useState(account._first_name);
    const [last, setLast] = useState(account._last_name);
    const [mail, setMail] = useState(account._email);
    const [word, setWord] = useState('');

    const isEnabled = mail !== '' && word !== '' && first !== '' && last !== '';

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let body = {
            account_id: account._account_id,
            data: {
                _first_name: first,
                _last_name: last,
                _email: mail,
                _password_hash: word
            }
        };

        account._first_name = first;
        account._last_name = last;
        account._email = mail;
        account._password_hash = word;
        localStorage.setItem('account', JSON.stringify(account));

        fetch("/api/accounts/edit", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify(body)
        })
            .then(response => {
                console.log(response);
                props.history.push('/profile-page');
            })
            .catch(err => {
                console.log(err);
            });


    };

  const classes = useStyles();
  const darkClasses = useDarkStyles();
  const memeClasses = useMemeStyles();

    let backgroundURL;
    {themeSelector.someProp === 'dark'?
        backgroundURL = darkFiller :
        themeSelector.someProp === 'meme'?
            backgroundURL = memeFiller :
            backgroundURL = lightFiller
    }

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
        {themeSelector.someProp === 'dark'?
            <Header
                color="transparent"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "dark"
                }}
                {...rest}
            /> :
            themeSelector.someProp === 'meme'?
                <Header
                    color="transparent"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "primary"
                    }}
                    {...rest}
                /> :
                <Header
                    color="transparent"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "info"
                    }}
                    {...rest}
                />
        }

        <div
            className={classes.pageHeader}
            style={{
                backgroundImage: "url(" + backgroundURL + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center",
            }}
        >
            <Parallax small filter image=
                {themeSelector.someProp === 'dark'? backgroundDark : themeSelector.someProp === 'meme'?  backgroundMeme : backgroundLight}
            />
          <div className=
                   {themeSelector.someProp === 'dark'? classNames(darkClasses.main, classes.mainRaised) : themeSelector.someProp === 'meme'? classNames(memeClasses.main, classes.mainRaised) : classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8}>
                    <div className={classes.profile}>
                      <div>
                          <img src={basicProfile} alt="..." className={imageClasses} />
                      </div>
                      <div className={classes.name}>
                        <h3 className=
                                {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>

                            {first}&nbsp;{last}&nbsp;
                        </h3>
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <NavPills
                      alignCenter
                      color="rose"
                      tabs={[
                        {
                          tabButton: "Account Information",
                          tabIcon: Camera,
                          tabContent: (
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8}>
                                    <Card className={classes[cardAnimaton]}>
                                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                                            <CardHeader color="info" className={classes.cardHeader}>
                                                <h3><b>RateMyClass</b></h3>
                                            </CardHeader>
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
                                                    Update
                                                </Button>
                                            </CardBody>
                                        </form>
                                    </Card>
                                </GridItem>
                            </GridContainer>
                          )
                        },
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    </div>
  );
}