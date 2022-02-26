import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import styles from "./About.module.css";

const useStyles = makeStyles({
  heading: {
    marginBottom: 12,
  },
  skillText: {
    fontSize: 22,
    lineHeight: "40px",
    wordSpacing: "24px",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <section className={styles.about}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <div className={styles.aboutme}>
            <Typography variant="h2" className={classes.heading}>
              About me
            </Typography>

            <Typography variant="body1" color="textPrimary">
              Hi, My name is Farhan Hussain and I have been learning web
              development since 1 and half year and very much dedicated to make
              myself gear up with some professional skills. I prefer to keep
              learning, continue challenging myself, and do interesting things
              that matter..
            </Typography>
          </div>

          <div className={styles.skills}>
            <Typography variant="h3" className={classes.heading}>
              Skills
            </Typography>
            <Typography variant="h6" className={classes.skillText}>
              HTML5 CSS3 SCSS JavaScript React.Js React-Redux Next.Js TypeScript
              Material-UI GSAP Firebase Github.
            </Typography>
          </div>
        </div>
        <div className={styles.imageContainer}></div>
      </div>
    </section>
  );
};

export default About;
