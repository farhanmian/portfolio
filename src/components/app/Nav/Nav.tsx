import React from "react";
import styles from "./Nav.module.css";
import { Link, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
  },
  linkText: {
    textTransform: "capitalize",
    fontWeight: 400,
  },
});

export default function Nav() {
  const classes = useStyles();
  const navLinks = ["about", "projects", "contact"];

  const goToSectionHandler = (link: string) => {
    if (link === "resume") return;
    console.log(link);
    document.querySelector(`#${link}`)?.scrollIntoView({ behavior: "smooth" });
  };

  // https://drive.google.com/file/d/1QjVaAKAu8vRLp6tGsEOSUKobKXZi1FxY/view?usp=sharing

  return (
    <nav className={styles.nav}>
      <div className={styles.innerContainer}>
        <div className={styles.linkContainer}>
          {navLinks.map((link) => (
            <Link
              key={link}
              onClick={() => goToSectionHandler(link)}
              className={classes.link}
            >
              <Typography
                variant="subtitle1"
                color="secondary"
                className={classes.linkText}
              >
                {link}
              </Typography>
            </Link>
          ))}
          <Link
            href="https://drive.google.com/file/d/1QjVaAKAu8vRLp6tGsEOSUKobKXZi1FxY/view?usp=sharing"
            target="_blank"
            className={classes.link}
          >
            <Typography
              variant="subtitle1"
              color="secondary"
              className={classes.linkText}
            >
              resume
            </Typography>
          </Link>
        </div>
      </div>
    </nav>
  );
}
