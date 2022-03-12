import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import styles from "./Header.module.css";
import { gsap } from "gsap";
import Work from "../../icons/Work";

const useStyles = makeStyles((theme) => {
  return {
    professionHeading: {
      marginBottom: 12,
      textTransform: "uppercase",
    },
    nameHeading: {
      marginBottom: 15,
      [theme.breakpoints.down(600)]: {
        fontSize: 45,
        lineHeight: "65px",
      },
      [theme.breakpoints.down(500)]: {
        fontSize: 42,
        lineHeight: "55px",
      },
      [theme.breakpoints.down(400)]: {
        fontSize: 38,
        lineHeight: "50px",
      },
    },
    aboutText: {
      lineHeight: "1.4",
      fontSize: 20,
      [theme.breakpoints.down(500)]: {
        fontSize: 18,
        marginRight: 10,
      },
    },
  };
});

export default function Header() {
  const classes = useStyles();

  /**applying gsap animation */
  useEffect(() => {
    gsap.from("#frontEndHeading", {
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "back",
    });
  }, []);

  return (
    <header id="home" className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <Typography
            id="frontEndHeading"
            variant="h6"
            color="secondary"
            className={classes.professionHeading}
          >
            Font-End Developer
          </Typography>

          <Typography
            variant="h2"
            color="primary"
            className={classes.nameHeading}
          >
            Hello, My name is
            <br /> Farhan Hussain
          </Typography>

          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.aboutText}
          >
            I have been learning web development since 2 years and very much
            dedicated to make myself gear up with some professional skills.
          </Typography>
        </div>

        <div className={styles.imageContainer}>
          <Work />
        </div>
      </div>
    </header>
  );
}
