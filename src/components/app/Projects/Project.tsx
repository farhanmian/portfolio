import React from "react";
import "./Project.css";
import Project1 from "../../../assets/img/portfolio-1.png";
import Project2 from "../../../assets/img/portfolio-2.png";
import Project3 from "../../../assets/img/portfolio-3.png";
import Project4 from "../../../assets/img/portfolio-4.png";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    viewProjectBtn: {
      textTransform: "capitalize",
      padding: "6px 22px",
      borderWidth: 2,
      borderRadius: 5,
      transition: "all .2s",
      "&:hover": {
        borderWidth: 2,
        borderColor: "#f9004d",
        backgroundColor: "#f9004d",
      },
      [theme.breakpoints.down(1000)]: {
        padding: "2px 10px",
        "& > span": {
          fontSize: 16,
        },
      },
    },
  };
});

const projectsData = [
  {
    name: "Music App",
    img: Project1,
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
    link: "https://music-app-liard.vercel.app/",
  },
  {
    name: "Ecommerce App",
    img: Project2,
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
    link: "http://ecommerce-app-six.vercel.app/",
  },
  {
    name: "Landing Page",
    img: Project3,
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
    link: "https://alivio-landing-page-bay.vercel.app/",
  },
  {
    name: "Movie App",
    img: Project4,
    text: "A Music Web-App where user have to login with there Spotify Account, but the user is only allowed to access the data if its email is enter in Spotify-Dashboard. Web-App created with Next.Js, TS, MUI.",
    link: "https://react-movie-49d4a.web.app/",
  },
];

function Project() {
  const classes = useStyles();

  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading mb__30">
        <h1 className="heading">My Latest Project</h1>
      </div>
      <div className="container">
        <div className="row">
          {projectsData.map((project, i) => {
            return (
              <div key={i} className="col__3 project__container">
                <div className="project__box pointer relative">
                  <div className="project__box__img pointer relative">
                    <div className="project__img__box">
                      <img src={project.img} alt="" className="project__img" />
                    </div>
                    <div className="mask__effect"></div>
                  </div>
                  <div className="project__meta absolute">
                    <h2 className="project__text">{project.name}</h2>
                    <h4 className="project__text">
                      A Music Web-App where user have to login with there
                      Spotify Account, but the user is only allowed to access
                      the data if its email is enter in Spotify-Dashboard.
                      Web-App created with Next.Js, TS, MUI.
                    </h4>
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="outlined"
                      color="primary"
                      className={classes.viewProjectBtn}
                    >
                      View Projects
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
