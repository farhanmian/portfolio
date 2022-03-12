import React, { useEffect, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { GitHub, KeyboardArrowUp, LinkedIn, Twitter } from "@material-ui/icons";
import {
  Button,
  TextField,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";
import emailjs from "emailjs-com";
import Loading from "../../partials/Loading/Loading";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Message from "../../icons/Message";

const useStyles = makeStyles((theme) => {
  return {
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
      [theme.breakpoints.down(1000)]: {
        height: 40,
        "& > span h6": {
          fontSize: 16,
        },
      },
      [theme.breakpoints.down(800)]: {
        minWidth: 120,
        maxWidth: 120,
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
        color: "#ccc !important",
      },
      "&> div": {
        "& > fieldset": {
          borderColor: "#ccc !important",
        },
        "& > input": {
          color: "#ccc",
        },
        "& > textarea": {
          color: "#ccc",
        },
        "&:hover > fieldset": {
          borderColor: "#fff !important",
        },
      },
      [theme.breakpoints.down(1000)]: {
        "& > label": {
          fontSize: 18,
        },
        "& > div": {
          fontSize: 20,
        },
      },
      [theme.breakpoints.down(500)]: {
        "& > label": {
          fontSize: 16,
        },
        "& > div": {
          fontSize: 18,
        },
      },
    },
    goBackToTop: {
      minWidth: 48,
      maxWidth: 48,
      minHeight: 48,
      maxHeight: 48,
      borderRadius: "50%",
      backgroundColor: "#f9004d",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      right: "1%",
      bottom: "2%",
      visibility: "hidden",
      opacity: 0,
      boxShadow: "0 2px 8px #f9004d75",
      zIndex: 9999,
      "&:hover": {
        backgroundColor: "#e30147",
        "& svg": {
          transform: "scale(1.1)",
        },
      },
    },
    arrowIcon: {
      color: "#fff",
      transition: "all .3s",
    },
  };
});

const Contact = () => {
  const classes = useStyles();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const [showSentMsge, setShowSentMsge] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /** applying gsap animaiton */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#projects",
          start: "top center",
          end: "top top",
          scrub: true,
        },
      })
      .to("#goBackToTop", { opacity: 1, visibility: "visible" });
  }, []);

  useEffect(() => {
    if (!showSentMsge) return;
    gsap.to("#msge", { right: 0, ease: "bounce", duration: 1.8 });
  }, [showSentMsge]);

  useEffect(() => {
    if (!showSentMsge) return;

    const timeout = setTimeout(() => {
      setShowSentMsge(false);
    }, 4000);
    () => clearTimeout(timeout);
  }, [showSentMsge]);

  const goBackToTopHandler = () => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
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
            <Message />
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
              label={"Email"}
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
              color="secondary"
              className={classes.submitBtn}
              type="submit"
              style={{ pointerEvents: isLoading ? "none" : "all" }}
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

        {showSentMsge && (
          <div id="msge" className={styles.emailSentMsgeContainer}>
            <Typography variant="subtitle1" color="primary">
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
        <KeyboardArrowUp className={classes.arrowIcon} color="secondary" />
      </Button>

      <div className={styles.contactWave} />
    </section>
  );
};

export default Contact;
