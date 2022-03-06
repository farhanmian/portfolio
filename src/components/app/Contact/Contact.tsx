import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../../../assets/img/contact-img-2.jpg";
import emailjs from "emailjs-com";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  submitBtn: {
    marginTop: 15,
    width: 180,
    height: 50,
    borderRadius: 5,
    border: "2px solid #f9004d",
    textTransform: "uppercase",
    letterSpacing: 2,
    transition: "0.4s all ease",
    "&>span": {
      fontSize: 18,
      fontFamily: "sans-serif",
    },
  },
});

function Contact() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [showSentMsge, setShowSentMsge] = useState(false);

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
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
    <div className="contact component__space" id="Contact">
      <div className="container">
        <div className="row contact__container ">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Let`s Talk.</h1>
                <p className="hire__text white">
                  You can also Contact me via phone:
                </p>
                <p className="hire__text white">
                  <strong>7983265440</strong> or email{" "}
                  <strong>farhanmian099@gmail.com.com</strong>
                </p>
              </div>
              <form onSubmit={formSubmitHandler} className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name*"
                  name="name"
                  required
                />
                <input
                  type="email"
                  className="contact email"
                  placeholder="Your Email*"
                  name="email"
                  required
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject*"
                  name="subject"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message*"
                  required
                ></textarea>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.submitBtn}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className="contact__img_container">
            <img src={contactImg} alt="" className="contact__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
