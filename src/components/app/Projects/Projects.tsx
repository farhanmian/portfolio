import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import styles from "./Projects.module.css";
import project1 from "../../../assets/img/project-1.png";
import project2 from "../../../assets/img/project-2.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles({
  projectBtn: {
    padding: 0,
    width: 150,
    minHeight: 43,
    maxHeight: 43,
    borderRadius: 24,
    textTransform: "capitalize",
  },
});

const projectData = [
  {
    name: "Ecommerce",
    img: project1,
    text: "A Ecommerce Web-App where user can create/delete a account, add item to cart/wishlist, ect. Web-App created with Next.Js, TS, MUI, Firebase.",
  },
  {
    name: "Music-App",
    img: project1,
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
  },
  {
    name: "Movie-App",
    img: project1,
    text: "A Movie Web-App where user can get information about Movies like :- description, cast, release date, rating, trailer, etc. Web-App created using React.Js & React-Redux.",
  },
  {
    name: "Landing Page",
    img: project2,
    text: "A Simple Landing Page create using Next.Js & MUI",
  },
];

export default function Projects() {
  const classes = useStyles();

  /**applying gsap animation */
  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      gsap.from(`#projectImage${i}`, {
        x: "-50vw",
        ease: "back",
        duration: 2,
        scrollTrigger: {
          trigger: `#projectImage${i}`,
          start: i === 1 ? "top bottom" : "top center",
        },
      });
    }
    for (let i = 1; i < 5; i++) {
      gsap.from(`#projectTextContainer${i}`, {
        x: "50vw",
        ease: "back",
        duration: 2,
        scrollTrigger: {
          trigger: `#projectTextContainer${i}`,
          start: i === 1 ? "top bottom" : "top center",
        },
      });
    }
  }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.innerContainer}>
        <Typography variant="h2" color="primary">
          Projects
        </Typography>
        <div className={styles.projectsContainer}>
          {projectData.map((project, i) => {
            return (
              <div key={i} className={styles.project}>
                <div
                  id={`projectImage${i + 1}`}
                  className={styles.projectImageContainer}
                >
                  <img
                    src={project.img}
                    alt="projectImg"
                    className={styles.projectImg}
                  />
                </div>

                <div
                  id={`projectTextContainer${i + 1}`}
                  className={styles.projectTextContainer}
                >
                  <Typography variant="h3">{project.name}</Typography>

                  <Typography variant="body2" color="textPrimary">
                    {project.text}
                  </Typography>

                  <Button
                    variant="outlined"
                    className={classes.projectBtn}
                    color="primary"
                  >
                    <Typography variant="subtitle1">View Project</Typography>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
