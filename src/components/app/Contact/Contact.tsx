import React from "react";
import { Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
import UnderlineHeading from "../../partials/UnderlineHeading/UnderlineHeading";
import styles from "./Contact.module.css";
import contactImg from "../../../assets/img/contact-me.png";

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
          <form className={styles.contactForm}>
            <TextField
              id="outlined-basic"
              label="Name"
              size="small"
              fullWidth
              className={classes.textField}
              variant="outlined"
              color="primary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Email"
              size="small"
              fullWidth
              className={classes.textField}
              variant="outlined"
              color="primary"
              required
            />
            <TextField
              variant="outlined"
              color="primary"
              id="outlined-multiline-static"
              label="Message"
              fullWidth
              className={classes.textField}
              multiline
              rows={5}
            />

            <Button
              variant="contained"
              color="primary"
              className={classes.submitBtn}
              type="submit"
              disableElevation
            >
              <Typography variant="subtitle1">Send</Typography>
            </Button>
          </form>
        </div>
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
