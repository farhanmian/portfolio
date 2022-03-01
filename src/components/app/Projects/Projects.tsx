import React, { useEffect, useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import styles from "./Projects.module.css";
import ecommerce from "../../../assets/img/ecommerce.png";
import alivio from "../../../assets/img/alivio.png";
import musicApp from "../../../assets/img/music-app.png";
import movieApp from "../../../assets/img/movie-app.png";
import todoApp from "../../../assets/img/todo-app.png";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";

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

  colore5e5e5: {
    color: "#e5e5e5",
  },
});

const projectData = [
  {
    id: 1,
    name: "Ecommerce App",
    text: "A Ecommerce Web-App where user can create/delete a account, add item to cart/wishlist, ect. Web-App created with Next.Js, TS, MUI, Firebase.",
    url: "https://ecommerce-app-six.vercel.app/",
    activeProjectBackground: {
      background: `linear-gradient(
      45deg,
      #3f3d56 0%,
      #353346 49%,
      #17151f 50%,
      transparent 50%
    ),
    url(${ecommerce})`,
      backgroundPositionX: "300%",
      backgroundSize: "contain",
    },
  },
  {
    id: 2,
    name: "Music App",
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
    url: "https://music-app-liard.vercel.app/",
    activeProjectBackground: {
      background: `linear-gradient(
      45deg,
      #3f3d56 0%,
      #353346 49%,
      #17151f 50%,
      transparent 50%
    ),
    url(${musicApp})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
    },
  },
  {
    id: 3,
    name: "Movie App",
    text: "A Movie Web-App where user can get information about Movies like :- description, cast, release date, rating, trailer, etc. Web-App created using React.Js & React-Redux.",
    url: "https://react-movie-49d4a.web.app/",
    activeProjectBackground: {
      background: `linear-gradient(
      45deg,
      #3f3d56 0%,
      #353346 49%,
      #17151f 50%,
      transparent 50%
    ),
    url(${movieApp})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
    },
  },
  {
    id: 4,
    name: "Landing Page",
    text: "A Simple Landing Page create using Next.Js & MUI",
    url: "https://alivio-landing-page-bay.vercel.app/",
    activeProjectBackground: {
      background: `linear-gradient(
      45deg,
      #3f3d56 0%,
      #353346 49%,
      #17151f 50%,
      transparent 50%
    ),
    url(${alivio})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
    },
  },
  {
    id: 5,
    name: "Todo App",
    text: "A Todo App created using Next.Js, Redux, MUI, Firebase-SDK",
    url: "https://todo-with-nextjs.vercel.app/",
    activeProjectBackground: {
      background: `linear-gradient(
      45deg,
      #3f3d56 0%,
      #353346 49%,
      #17151f 50%,
      transparent 50%
    ),
    url(${todoApp})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "right",
    },
  },
];

export default function Projects() {
  const classes = useStyles();
  const [activeProject, setActiveProject] = useState(1);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;
    const timeout = setTimeout(() => {
      setActiveProject((prev) => (prev === projectData.length ? 1 : prev + 1));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [activeProject, hover]);

  return (
    <section className={styles.projects}>
      <div className={styles.innerContainer}>
        <UnderlineHeading heading="Projects" />
        <div className={styles.projectsContainer}>
          {projectData.map((project) => {
            return (
              project.id === activeProject && (
                <div
                  key={project.id}
                  className={styles.project}
                  style={project.activeProjectBackground}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div className={styles.projectTextContainer}>
                    <Typography variant="h3" color="secondary">
                      {project.name}
                    </Typography>

                    <Typography variant="body2" className={classes.colore5e5e5}>
                      {project.text}
                    </Typography>

                    <Button
                      href={project.url}
                      target="_blank"
                      variant="outlined"
                      className={classes.projectBtn}
                      color="secondary"
                    >
                      <Typography variant="subtitle1" color="secondary">
                        View Project
                      </Typography>
                    </Button>
                  </div>
                </div>
              )
            );
          })}

          <div className={styles.projectBtnContainer}>
            {projectData.map((item) => {
              return (
                <span
                  key={item.id}
                  className={`${
                    !hover ? styles.projectBtn : styles.disabledBtn
                  } ${
                    item.id === activeProject
                      ? !hover
                        ? styles.activeProjectBtn
                        : styles.disabledActiveBtn
                      : ""
                  } `}
                  onClick={() => setActiveProject(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
