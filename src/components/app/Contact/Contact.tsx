import React from "react";
import "./Contact.css";
import contactImg from "../../../assets/img/about-9.jpg";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="container">
        <div className="row">
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
              <div className="input__box">
                <input
                  type="text"
                  className="contact name"
                  placeholder="Your name *"
                />
                <input
                  type="text"
                  className="contact email"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Write a Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your message"
                ></textarea>
                <button className="btn contact pointer" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col__2 contact__img_container">
            <img src={contactImg} alt="" className="contact__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
