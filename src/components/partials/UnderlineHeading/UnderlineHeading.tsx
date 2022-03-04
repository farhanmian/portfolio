import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import styles from "./UnderlineHeading.module.css";

const useStyles = makeStyles((theme) => {
  return {
    heading: {
      [theme.breakpoints.down(1000)]: {
        fontSize: 45,
      },
      [theme.breakpoints.down(600)]: {
        fontSize: 38,
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
