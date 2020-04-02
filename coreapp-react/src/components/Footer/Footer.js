/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import themeSelector from '../../views/Aesthetic/ThemeSelector'


import RMCLogo from "assets/img/RMC/RMC-Logo.png";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>

        {/*
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        */}

        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
                <Link to = "/landing-page">
                  <img src={RMCLogo}  alt={"RateMyClass"} width={"200"} height={"50"} />
                </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          {themeSelector.someProp === 'dark'?
              <div className={classes.footerWhiteFont}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}

                L. Arab, K. Chanco, J.Chung, N.Darby, E.Krul, J.Tong

              </div> :
              themeSelector.someProp === 'meme'?
                  <div className={classes.footerMemeFont}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}

                    L. Arab, K. Chanco, J.Chung, N.Darby, E.Krul, J.Tong

                  </div> :
                  <div className={classes.footerLightFont}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}

                    {/*
            <a
              href="https://www.creative-tim.com?ref=mkr-footer"
              className={aClasses}
              target="_blank"
            >
              Creative Tim
            </a>{" "}
            */}
                    L. Arab, K. Chanco, J.Chung, N.Darby, E.Krul, J.Tong

                  </div>
          }
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
