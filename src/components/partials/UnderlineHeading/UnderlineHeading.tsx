import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./UnderlineHeading.module.css";

const UnderlineHeading: React.FC<{ heading: string }> = ({ heading }) => {
  return (
    <div className={styles.displayFlex}>
      <Typography variant="h2" color="primary">
        {heading}
      </Typography>
      <span className={styles.underline} />
    </div>
  );
};

export default UnderlineHeading;
