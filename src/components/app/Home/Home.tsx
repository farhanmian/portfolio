import React, { useState, useEffect } from "react";
import Menu from "../../icons/Menu";
import "./Home.css";

const Home = () => {
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
          <div className="nav__innerContainer">
            <div className="navigation">
              <ul className="navbar d__flex">
                {navLinks.map((link) => {
                  return (
                    <li key={link} className="nav__items mx__15">
                      <a onClick={() => setActiveSection(link)}>{link}</a>
                    </li>
                  );
                })}
                <div className="toggle__menu">
                  <Menu
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                </div>
              </ul>
            </div>

            {show ? (
              <div id="sideNavbar" className="sideNavbar">
                <ul className="sidebar sideNavbarBtnContainer d__flex">
                  {navLinks.map((link) => {
                    return (
                      <li
                        onClick={() => setActiveSection(link)}
                        key={link}
                        className="sideNavbar"
                      >
                        {link}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </nav>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content_innerContainer">
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
    </div>
  );
};

export default Home;
