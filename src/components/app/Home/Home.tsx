import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  // fixed Header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header?.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  const navLinks = ["Home", "About", "Portfolio", "Contact"];
  const [activeSection, setActiveSection] = useState("");

  // handling smooth scrolling
  useEffect(() => {
    if (activeSection.trim().length === 0) return;
    document
      .querySelector(`#${activeSection}`)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <nav className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              {navLinks.map((link) => {
                return (
                  <li key={link} className="nav__items mx__15">
                    <a onClick={() => setActiveSection(link)}>{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#about">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#services">Services</a>
                </li>
                <li className="sideNavbar">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="#blog">Blog</a>
                </li>
                <li className="sideNavbar">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </nav>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Farhan Hussain</h2>
              <h3 className="home__text sweet pz__10">Web Developer.</h3>
              <h4 className="home__text pz__10">based in India.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
