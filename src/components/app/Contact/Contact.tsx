import React, { useEffect, useRef, useState } from "react";
import { ArrowUpward, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import {
  Button,
  TextField,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";
import styles from "./Contact.module.css";
import contactImg from "../../../assets/img/contact-me.png";
import emailjs from "emailjs-com";
import Loading from "../../partials/Loading/Loading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useStyles = makeStyles({
  submitBtn: {
    borderRadius: 8,
    minWidth: 89,
    maxWidth: 89,
    height: 43,
    padding: 0,
    boxShadow: "0 3px 3px rgba(0,0,0,.08)",
    "&:hover": {
      boxShadow: "0 4px 5px rgba(0,0,0,.15)",
      "& > *": {
        color: "#fff",
      },
    },
    "&:active": {
      boxShadow: "0 2px 3px rgba(0,0,0,.08)",
    },
  },
  contactIcon: {
    cursor: "pointer",
    transition: "all .3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  textField: {
    "&>label": {
      color: "#3F3D56",
    },
  },
  goBackToTop: {
    minWidth: 48,
    maxWidth: 48,
    minHeight: 48,
    maxHeight: 48,
    borderRadius: "50%",
    backgroundColor: "#6c63ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    right: "1%",
    bottom: "2%",
    visibility: "hidden",
    opacity: 0,
    zIndex: 9999,
    "&:hover": {
      backgroundColor: "#524ad7",
      "& svg": {
        transform: "scale(1.1)",
      },
    },
  },
  arrowIcon: {
    transition: "all .3s",
  },
});

const Contact = () => {
  const classes = useStyles();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState(false);
  const [showSentMsge, setShowSentMsge] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /** applying gsap animaiton */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 500",
          end: "bottom 1500",
          scrub: true,
        },
      })
      .to("#goBackToTop", { opacity: 1, visibility: "visible" });
  }, []);

  useEffect(() => {
    if (!showSentMsge) return;

    const timeout = setTimeout(() => {
      setShowSentMsge(false);
    }, 4000);
    () => clearTimeout(timeout);
  }, [showSentMsge]);

  const goBackToTopHandler = () => {
    document.querySelector("#intro")?.scrollIntoView({ behavior: "smooth" });
  };

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const message = messageInputRef.current?.value;

    console.log({ name: name, email: email, message: message });
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_s6fuggc",
        "template_1g0izax",
        e.target,
        "FQCTnadYsGngOM4f8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSentMsge(true);
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.innerContainer}>
        <UnderlineHeading heading="Contact me" />

        <div className={styles.formContainer}>
          <div className={styles.contactImageContainer}>
            <img
              src={contactImg}
              alt="contact-me"
              className={styles.contactImg}
            />
          </div>
          <form className={styles.contactForm} onSubmit={formSubmitHandler}>
            <TextField
              inputRef={nameInputRef}
              id="outlined-basic"
              label="Name"
              size="small"
              name="name"
              fullWidth
              className={classes.textField}
              variant="outlined"
              color="primary"
              disabled={isLoading}
              required
            />
            <TextField
              inputRef={emailInputRef}
              id="outlined-basic"
              type="email"
              label={emailError ? "Enter a valid Email" : "Email"}
              error={emailError}
              size="small"
              name="email"
              fullWidth
              className={classes.textField}
              variant="outlined"
              color="primary"
              disabled={isLoading}
              required
            />
            <TextField
              inputRef={messageInputRef}
              variant="outlined"
              name="message"
              color="primary"
              id="outlined-multiline-static"
              label="Message"
              fullWidth
              className={classes.textField}
              multiline
              disabled={isLoading}
              rows={5}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              type="submit"
              disabled={isLoading}
              disableElevation
            >
              {!isLoading ? (
                <Typography variant="subtitle1">Send</Typography>
              ) : (
                <Loading />
              )}
            </Button>
          </form>
        </div>

        {showSentMsge && (
          <div className={styles.emailSentMsgeContainer}>
            <Typography variant="subtitle1" color="secondary">
              Sent Successfully
            </Typography>
          </div>
        )}
      </div>

      <Button
        id="goBackToTop"
        className={classes.goBackToTop}
        onClick={goBackToTopHandler}
      >
        <ArrowUpward className={classes.arrowIcon} color="secondary" />
      </Button>

      <div className={styles.contactWave}>
        <div className={styles.contactIconContainer}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/farhan-mian-7aa5b21a3/"
          >
            <LinkedIn fontSize="large" className={classes.contactIcon} />
          </Link>
          <Link target="_blank" href="https://github.com/farhanmian">
            <GitHub fontSize="large" className={classes.contactIcon} />
          </Link>
          <Link target="_blank" href="https://twitter.com/FarhanM0990">
            <Twitter fontSize="large" className={classes.contactIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
