import React from "react";
import styles from "./About.module.css";
import { makeStyles, Typography } from "@material-ui/core";
import Skills from "../../icons/Skills";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      marginBottom: 12,
    },
    aboutHeading: {
      [theme.breakpoints.down(1200)]: {
        fontSize: 40,
      },
    },
    skillHeading: {
      [theme.breakpoints.down(1200)]: {
        fontSize: 35,
      },
    },
    skillText: {
      color: "#f3f3f3",
    },
    aboutText: {
      [theme.breakpoints.down(600)]: {
        fontSize: 20,
      },
    },
  };
});

const About = () => {
  const classes = useStyles();
  return (
    <section id="about" className={styles.about}>
      <div className={styles.innerContainer}>
        <UnderlineHeading heading="About Me" />
        <div className={styles.displayFlex}>
          <div className={styles.textContainer}>
            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.aboutText}
            >
              Hi, My name is Farhan Hussain and I have been learning web
              development since 2 years and very much dedicated to make myself
              gear up with some professional skills.
            </Typography>

            <Typography
              variant="body1"
              color="textPrimary"
              className={classes.aboutText}
            >
              I prefer to keep learning, continue challenging myself, and do
              interesting things that matter..
            </Typography>

            <Typography
              variant="body1"
              className={`${classes.skillText} ${classes.aboutText}`}
            >
              My Skills :- HTML5, CSS3, SCSS, Responsive Design, JavaScript,
              React.Js, React-Redux, React-Router, Next.Js, TypeScript,
              Material-UI, GSAP, API & AJAX and Firebase.
            </Typography>
          </div>
          <div className={styles.imageContainer}>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
