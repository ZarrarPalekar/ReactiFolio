import React from "react";
import "./whatsapp.styles.css";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+919867363215&text=Hi%20Zarrar%21%20I%20came%20here%20from%20your%20portfolio%20website."
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default Whatsapp;
