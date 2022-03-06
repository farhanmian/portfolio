import React from "react";
function Footer() {
  return (
    <footer
      className="footer d__flex align__items__center justify__content__space__between pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      <div className="container">
        <span
          className="copyright"
          style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}
        >
          Copyright © 2022 Web Developer Farhan. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
