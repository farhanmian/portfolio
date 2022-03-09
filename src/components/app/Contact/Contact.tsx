import React, { useEffect, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { Button, makeStyles } from "@material-ui/core";
import Loading from "../../partials/Loading/Loading";
import { DoneAll } from "@material-ui/icons";

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
  doneAllIcon: {
    transition: "all .3s",
  },
});

function Contact() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageDelivered, setIsMessageDelivered] = useState(true);

  useEffect(() => {
    if (!isMessageDelivered) return;

    const timeout = setTimeout(() => {
      setIsMessageDelivered(false);
    }, 1800);
    () => clearTimeout(timeout);
  }, [isMessageDelivered]);

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_s6fuggc",
        "template_1g0izax",
        e.target,
        "FQCTnadYsGngOM4f8"
      )
      .then(
        () => {
          setIsLoading(false);
          setIsMessageDelivered(true);
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
        <div className="contact__container ">
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
                  className={`contact name ${isLoading ? "lightGrey" : ""} `}
                  placeholder="Your name*"
                  name="name"
                  required
                  disabled={isLoading}
                />
                <input
                  type="email"
                  className={`contact email ${isLoading ? "lightGrey" : ""} `}
                  placeholder="Your Email*"
                  name="email"
                  required
                  disabled={isLoading}
                />
                <input
                  type="text"
                  className={`contact subject ${isLoading ? "lightGrey" : ""} `}
                  placeholder="Write a Subject*"
                  name="subject"
                  required
                  disabled={isLoading}
                />
                <textarea
                  name="message"
                  className={`${isLoading ? "lightGrey" : ""}`}
                  id="message"
                  placeholder="Write Your message*"
                  required
                  disabled={isLoading}
                ></textarea>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.submitBtn}
                  type="submit"
                  disableRipple={isLoading}
                >
                  {!isLoading ? (
                    !isMessageDelivered ? (
                      "Submit"
                    ) : (
                      <DoneAll
                        className={`${classes.doneAllIcon} doneAllIcon `}
                      />
                    )
                  ) : (
                    <Loading />
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
