import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import styles from "./Projects.module.css";
import ecommerce from "../../../assets/img/project-2.png";
import alivio from "../../../assets/img/project-3.png";
import musicApp from "../../../assets/img/project-1.png";
import movieApp from "../../../assets/img/project-4.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";
import { Grid } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => {
  return {
    projectBtn: {
      padding: "6px 24px",
      transition: "all .2s",
      borderWidth: 2,
      borderRadius: 5,
      textTransform: "capitalize",
      fontSize: 18,
      "&:hover": {
        borderWidth: 2,
        borderColor: "#f9004d",
        backgroundColor: "#f9004d",
      },
      [theme.breakpoints.down(700)]: {
        fontSize: 16,
        padding: "4px 22px",
      },
      [theme.breakpoints.down(601)]: {
        fontSize: 18,
        padding: "4px 24px",
      },
      [theme.breakpoints.down(501)]: {
        fontSize: 16,
        padding: "4px 24px",
      },
    },

    colore5e5e5: {
      color: "#e5e5e5",
    },
    projectName: {
      fontSize: 35,
      [theme.breakpoints.down(900)]: {
        fontSize: 32,
        lineHeight: "40px",
      },

      [theme.breakpoints.down(601)]: {
        fontSize: 40,
        lineHeight: "50px",
      },
      [theme.breakpoints.down(501)]: {
        fontSize: 38,
        lineHeight: "50px",
      },
      [theme.breakpoints.down(401)]: {
        fontSize: 36,
        lineHeight: "50px",
      },
    },
    projectText: {
      [theme.breakpoints.down(1200)]: {
        fontSize: 20,
      },
      [theme.breakpoints.down(900)]: {
        fontSize: 18,
        lineHeight: "34px",
      },
      [theme.breakpoints.down(800)]: {
        fontSize: 16,
        lineHeight: "32px",
      },
      [theme.breakpoints.down(601)]: {
        fontSize: 22,
      },
      [theme.breakpoints.down(501)]: {
        fontSize: 18,
      },
      [theme.breakpoints.down(401)]: {
        fontSize: 16,
      },
    },
  };
});

const projectData = [
  {
    id: 1,
    name: "Ecommerce App",
    text: "A Ecommerce Web-App where user can create/delete a account, add item to cart/wishlist, ect. Web-App created with Next.Js, TS, MUI, Firebase.",
    url: "https://ecommerce-app-six.vercel.app/",
    img: ecommerce,
  },
  {
    id: 2,
    name: "Music App",
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
    url: "https://music-app-liard.vercel.app/",
    img: musicApp,
  },
  {
    id: 3,
    name: "Movie App",
    text: "A Movie Web-App where user can get information about Movies like :- description, cast, release date, rating, trailer, etc. Web-App created using React.Js & React-Redux.",
    url: "https://react-movie-49d4a.web.app/",
    img: movieApp,
  },
  {
    id: 4,
    name: "Landing Page",
    text: "A Simple Landing Page create using Next.Js & MUI",
    url: "https://alivio-landing-page-bay.vercel.app/",
    img: alivio,
  },
];

export default function Projects() {
  const classes = useStyles();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projects",
          // markers: true,
          start: "top center",
        },
      })
      .fromTo(
        "#project",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "back" }
      );
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.innerContainer}>
        <UnderlineHeading heading="Projects" />
        <Grid
          justifyContent="space-around"
          rowGap="48px"
          container
          className={styles.projectsContainer}
        >
          {projectData.map((project) => {
            return (
              <Grid
                id="project"
                key={project.id}
                item
                className={styles.project}
              >
                <div className={styles.projectOverlay} />
                <div className={styles.projectImageContainer}>
                  <img src={project.img} className={styles.projectImg} />
                </div>
                <div className={styles.textContainer}>
                  <Typography
                    variant="h3"
                    color="primary"
                    className={classes.projectName}
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.projectText}
                  >
                    {project.text}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.projectBtn}
                    href={project.url}
                    target="_blank"
                  >
                    View Project
                  </Button>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
}

/*

<Slider {...settings}>
            {projectData.map((project) => {
              return (
                <div key={project.id} className={styles.project}>
                  <div className={styles.projectTextContainer}>
                    <Typography
                      variant="h3"
                      color="secondary"
                      className={classes.projectName}
                    >
                      {project.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      className={`${classes.colore5e5e5} ${classes.projectText} `}
                    >
                      {project.text}
                    </Typography>

                    <Button
                      href={project.url}
                      target="_blank"
                      variant="outlined"
                      className={classes.projectBtn}
                      color="secondary"
                    >
                      <Typography
                        variant="subtitle1"
                        color="secondary"
                        className={classes.btnText}
                      >
                        View Project
                      </Typography>
                    </Button>
                  </div>

                  <div className={styles.projectImageContainer}>
                    <img
                      src={project.img}
                      alt="project-img"
                      className={styles.projectImg}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>

*/
