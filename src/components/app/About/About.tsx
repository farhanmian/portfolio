import React from "react";
import "./About.css";
import aboutImg from "../../../assets/img/about.jpg";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  resumeBtn: {
    textTransform: "capitalize",
    padding: "10px 18px",
    border: "2px solid #f9004d",
  },
});

function About() {
  const classes = useStyles();

  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop?.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi, I have been learning web development for 2 years now and
                very much dedicated to make myself gear up with some
                professional skills. Over All this time I have Sharpen my
                skills, created many projects, and follow best practices.
              </p>
              <p className="about__text p__color">
                I prefer to keep learning, continue challenging myself, and do
                interesting things that matter.
              </p>
              <p className="about__text lightGrey">
                My Skills: HTML5, CSS3, SCSS, Responsive Design, JavaScript,
                React.Js, React-Redux, React-Router, Next.Js, TypeScript,
                Material-UI, GSAP, API & AJAX and Firebase.
              </p>
              <div className="about__button d__flex align__items__center">
                {/* <a href="#">
                  <button className="about btn pointer">Download Resume</button>
                </a> */}
                <Button
                  className={classes.resumeBtn}
                  variant="contained"
                  color="secondary"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
