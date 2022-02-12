import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import styles from "./Header.module.css";
import userImg from "../../assets/img/header-img.png";

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

  return (
    <header className={styles.header}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <Typography
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
            I have been learning web development since 1 and half year and very
            much dedicated to make myself gear up with some professional skills.
          </Typography>
        </div>

        <div className={styles.imageContainer}>
          <img src={userImg} alt="img" className={styles.image} />
        </div>
      </div>
    </header>
  );
}
