import React, {useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
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
import katProfile from "assets/img/faces/kendall.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import darkStyles from "assets/jss/material-kit-react/views/RMC/darkProfilePage.js";
import memeStyles from "assets/jss/material-kit-react/views/RMC/memeProfilePage.js";

import VerifiedUser from "@material-ui/icons/VerifiedUser";
import {green} from "@material-ui/core/colors";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import {Link} from "react-router-dom";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import CustomInput from "../../components/CustomInput/CustomInput";
import CardFooter from "../../components/Card/CardFooter";
import People from "@material-ui/icons/People";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Transition from "react-transition-group/Transition";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import themeSelector from "../SettingsPage/ThemeSelector";
import backgroundLight from "assets/img/RMC/lightAccount.jpg";
import backgroundMeme from "assets/img/RMC/memeAccount.png";
import backgroundDark from "assets/img/RMC/darkAccount.jpg";
import lightFiller from "assets/img/RMC/lightBackground.jpg";
import darkFiller from "assets/img/RMC/darkBackground.jpg";
import memeFiller from "assets/img/RMC/memeBackground.jpg";

import accountInformation from "../AccountInformation";

const useStyles = makeStyles(styles);
const useDarkStyles = makeStyles(darkStyles);
const useMemeStyles = makeStyles(memeStyles);

// const accFirst = 'Katrina';
// const accLast = 'Chanco';
// const accMail = 'kat@email.ca';
// const accWord = 'fillerpassword';

export default function ProfilePage(props) {
    const account = JSON.parse(localStorage.getItem('account'));

    const [first, setFirst] = useState(account._first_name);
    const [last, setLast] = useState(account._last_name);
    const [mail, setMail] = useState(account._email);
    const [word, setWord] = useState('');

    // const [first, setFirst] = useState(accFirst);
    // const [last, setLast] = useState(accLast);
    // const [mail, setMail] = useState(accMail);
    // const [word, setWord] = useState(accWord);

    const isEnabled = mail !== '' && word !== '' && first !== '' && last !== '';

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting First Name: ${first}`);
        accountInformation.first = first;
        alert(`Submitting Last Name: ${last}`);
        accountInformation.last = last;
        alert(`Submitting Email: ${mail}`);
        accountInformation.mail = mail;
        alert(`Submitting Password: ${word}`);
        accountInformation.word = word;
        //TODO update
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

  const [classicModal, setClassicModal] = React.useState(false);
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
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                          {/*{first === 'Katrina' && last === 'Chanco'? <img src={katProfile} alt="..." className={imageClasses} /> : <img src={basicProfile} alt="..." className={imageClasses} />}*/}
                      </div>
                      <div className={classes.name}>
                        <h3 className=
                                {themeSelector.someProp === 'dark'? darkClasses.title : themeSelector.someProp === 'meme'? memeClasses.title : classes.title}>

                            {first}&nbsp;{last}&nbsp;
                        </h3>
                        {/*<Button justIcon link className={classes.margin5}>*/}
                        {/*  <i className={VerifiedUser} />*/}
                        {/*</Button>*/}
                        {/*{first === 'Katrina' && last === 'Chanco'? <VerifiedUser style={{ color: green[500] }} /> : ''}*/}
                      </div>
                    </div>
                  </GridItem>
                </GridContainer>
                {/*<div className={classes.description}>*/}
                {/*  <p>*/}
                {/*      <b>*/}
                {/*          My Biography{" "}*/}
                {/*      </b>*/}
                {/*  </p>*/}
                {/*</div>*/}
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



                              {/*<GridItem xs={12} sm={12} md={4}>*/}
                              {/*  <img*/}
                              {/*    alt="..."*/}
                              {/*    src={studio1}*/}
                              {/*    className={navImageClasses}*/}
                              {/*  />*/}
                              {/*  <img*/}
                              {/*    alt="..."*/}
                              {/*    src={studio2}*/}
                              {/*    className={navImageClasses}*/}
                              {/*  />*/}
                              {/*</GridItem>*/}
                              {/*<GridItem xs={12} sm={12} md={4}>*/}
                              {/*  <img*/}
                              {/*    alt="..."*/}
                              {/*    src={studio5}*/}
                              {/*    className={navImageClasses}*/}
                              {/*  />*/}
                              {/*  <img*/}
                              {/*    alt="..."*/}
                              {/*    src={studio4}*/}
                              {/*    className={navImageClasses}*/}
                              {/*  />*/}
                              {/*</GridItem>*/}
                            </GridContainer>
                          )
                        },
                        // {
                        //   tabButton: "Social Media Links",
                        //   tabIcon: Palette,
                        //   tabContent: (
                        //     <GridContainer justify="center">
                        //       <GridItem xs={12} sm={12} md={4}>
                        //         <img
                        //           alt="..."
                        //           src={work1}
                        //           className={navImageClasses}
                        //         />
                        //         <img
                        //           alt="..."
                        //           src={work2}
                        //           className={navImageClasses}
                        //         />
                        //         <img
                        //           alt="..."
                        //           src={work3}
                        //           className={navImageClasses}
                        //         />
                        //       </GridItem>
                        //       <GridItem xs={12} sm={12} md={4}>
                        //         <img
                        //           alt="..."
                        //           src={work4}
                        //           className={navImageClasses}
                        //         />
                        //         <img
                        //           alt="..."
                        //           src={work5}
                        //           className={navImageClasses}
                        //         />
                        //       </GridItem>
                        //     </GridContainer>
                        //   )
                        // },
                        // {
                        //   tabButton: "Profile Picture",
                        //   tabIcon: Favorite,
                        //   tabContent: (
                        //     <GridContainer justify="center">
                        //       <GridItem xs={12} sm={12} md={4}>
                        //         <img
                        //           alt="..."
                        //           src={work4}
                        //           className={navImageClasses}
                        //         />
                        //         <img
                        //           alt="..."
                        //           src={studio3}
                        //           className={navImageClasses}
                        //         />
                        //       </GridItem>
                        //       <GridItem xs={12} sm={12} md={4}>
                        //         <img
                        //           alt="..."
                        //           src={work2}
                        //           className={navImageClasses}
                        //         />
                        //         <img
                        //           alt="..."
                        //           src={work1}
                        //           className={navImageClasses}
                        //         />
                        //         <img
                        //           alt="..."
                        //           src={studio1}
                        //           className={navImageClasses}
                        //         />
                        //       </GridItem>
                        //     </GridContainer>
                        //   )
                        // }
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