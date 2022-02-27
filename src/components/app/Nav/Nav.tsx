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
  const navLinks = ["about", "projects", "contacts"];

  return (
    <nav className={styles.nav}>
      <div className={styles.innerContainer}>
        <div className={styles.linkContainer}>
          {navLinks.map((link) => (
            <Link key={link} href={`#${link}`} className={classes.link}>
              <Typography
                variant="subtitle1"
                color="secondary"
                className={classes.linkText}
              >
                {link}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
