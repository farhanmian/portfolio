import React, { useEffect, useRef, useState } from "react";
import { Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";
import styles from "./Contact.module.css";
import contactImg from "../../../assets/img/contact-me.png";
import axios from "axios";
import emailjs from "emailjs-com";
import Loading from "../../partials/Loading/Loading";

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
});

const Contact = () => {
  const classes = useStyles();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState(false);
  const [showSentMsge, setShowSentMsge] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!showSentMsge) return;

    const timeout = setTimeout(() => {
      setShowSentMsge(false);
    }, 4000);
    () => clearTimeout(timeout);
  }, [showSentMsge]);

  console.log(showSentMsge);

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const message = messageInputRef.current?.value;

    console.log({ name: name, email: email, message: message });
    setIsLoading(true);

    /**checking email is valid or invalid */
    axios
      .request({
        method: "GET",
        url: "https://zerobounce1.p.rapidapi.com/v2/validate",
        params: {
          ip_address: "replace_the_IP_address_the_email_signed_up_from",
          email: email,
        },
        headers: {
          "x-rapidapi-host": "zerobounce1.p.rapidapi.com",
          "x-rapidapi-key":
            "917cc8094bmshadf39ef152f5f73p13ec07jsn8282e8aa694b",
        },
      })
      .then(function (response) {
        console.log(response.data.status);
        // if valid status will be "valid"
        if (response.data.status !== "valid") return setEmailError(true);
        setEmailError(false);
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
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <section className={styles.contact}>
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

      <div className={styles.contactWave}>
        <div className={styles.contactIconContainer}>
          <Instagram fontSize="large" className={classes.contactIcon} />
          <LinkedIn fontSize="large" className={classes.contactIcon} />
          <Twitter fontSize="large" className={classes.contactIcon} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
