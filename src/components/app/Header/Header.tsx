import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import styles from "./Header.module.css";
import userImg from "../../../assets/img/header-img.png";
import { gsap } from "gsap";

const useStyles = makeStyles({
  professionHeading: {
    marginBottom: 12,
    textTransform: "uppercase",
  },
  nameHeading: {
    marginBottom: 32,
  },
});

export default function Header() {
  const classes = useStyles();

  /**applying gsap animation */
  useEffect(() => {
    gsap.from("#headerImageContainer", {
      y: -300,
      x: "50vw",
      duration: 1.8,
      ease: "bounce",
      delay: 0.8,
    });
    gsap.from("#frontEndHeading", {
      // x: "-50vw",
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      ease: "back",
    });
  }, []);

  return (
    <header className={styles.header}>
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
            variant="h1"
            color="textSecondary"
            className={classes.nameHeading}
          >
            Hello, my name is
            <br /> Farhan Hussain
          </Typography>

          <Typography variant="body1" color="textPrimary">
            I have been learning web development since 2 years and very much
            dedicated to make myself gear up with some professional skills.
          </Typography>
        </div>

        <div id="headerImageContainer" className={styles.imageContainer}>
          <img src={userImg} alt="img" className={styles.image} />
        </div>
      </div>
    </header>
  );
}
