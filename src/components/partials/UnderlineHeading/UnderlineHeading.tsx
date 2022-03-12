import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "./UnderlineHeading.module.css";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      [theme.breakpoints.down(600)]: {
        fontSize: 45,
        lineHeight: "65px",
      },
      [theme.breakpoints.down(500)]: {
        fontSize: 42,
        lineHeight: "55px",
      },
      [theme.breakpoints.down(400)]: {
        fontSize: 38,
        lineHeight: "50px",
      },
    },
  };
});

const UnderlineHeading: React.FC<{ heading: string }> = ({ heading }) => {
  const classes = useStyles();

  return (
    <div className={styles.displayFlex}>
      <Typography variant="h2" color="primary" className={classes.heading}>
        {heading}
      </Typography>
      <span className={styles.underline} />
    </div>
  );
};

export default UnderlineHeading;
