import React from "react";
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

import profile from "assets/img/faces/kendall.jpg";

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

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
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
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/RMC/account.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Katrina Chanco&nbsp;</h3>
                    {/*<Button justIcon link className={classes.margin5}>*/}
                    {/*  <i className={VerifiedUser} />*/}
                    {/*</Button>*/}
                    <VerifiedUser style={{ color: green[500] }} />
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
                                    <form className={classes.form}>
                                        <CardHeader color="info" className={classes.cardHeader}>
                                            <h3><b>Account Settings</b></h3>
                                        </CardHeader>
                                        <CardBody>
                                            <CustomInput
                                                labelText="Katrina"
                                                id="first"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Chanco"
                                                id="last"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Email"
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "email",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="pass"
                                                formControlProps={{
                                                    fullWidth: true
                                                }}
                                                inputProps={{
                                                    type: "password",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className={classes.inputIconsColor}>
                                                                lock_outline
                                                            </Icon>
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}
                                            />
                                            <br>
                                            </br>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center"
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    color="info"
                                                    size={"lg"}
                                                    className={classes.button}
                                                    endIcon={<Icon>send</Icon>}
                                                    onClick={() => setClassicModal(true)}
                                                >
                                                    Update
                                                </Button>
                                                <Dialog
                                                    classes={{
                                                        root: classes.center,
                                                        paper: classes.modal
                                                    }}
                                                    open={classicModal}
                                                    TransitionComponent={Transition}
                                                    keepMounted
                                                    onClose={() => setClassicModal(false)}
                                                    aria-labelledby="classic-modal-slide-title"
                                                    aria-describedby="classic-modal-slide-description"
                                                >
                                                    <DialogTitle
                                                        id="classic-modal-slide-title"
                                                        disableTypography
                                                        className={classes.modalHeader}
                                                    >
                                                        <IconButton
                                                            className={classes.modalCloseButton}
                                                            key="close"
                                                            aria-label="Close"
                                                            color="inherit"
                                                            onClick={() => setClassicModal(false)}
                                                        >
                                                            <Close className={classes.modalClose} />
                                                        </IconButton>
                                                        <h4 className={classes.modalTitle}>Dear Account-ee,</h4>
                                                    </DialogTitle>
                                                    <DialogContent
                                                        id="classic-modal-slide-description"
                                                        className={classes.modalBody}
                                                    >
                                                        <p>
                                                            Please note you are about to MODIFY AND UPDATE your account information. By clicking 'Accept'
                                                            you are hereby agreeing to forever change this account... FOREVER
                                                        </p>
                                                    </DialogContent>
                                                    <DialogActions className={classes.modalFooter}>
                                                            <Button
                                                                onClick={() => setClassicModal(false)}
                                                                color="transparent"
                                                                simple>
                                                                Accept
                                                            </Button>
                                                        <Button
                                                            onClick={() => setClassicModal(false)}
                                                            color="danger"
                                                            simple
                                                        >
                                                            Decline
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </div>
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
  );
}