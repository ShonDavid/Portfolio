import React, { Component } from "react";
import "./contactme.css";

class ContactMe extends Component {
  state = {};
  render() {
    return (
      <div className="flex-center">
        <div className="contact-me-div">
          <h1 className="text-style-contact-me" id="contact-me">
            Contact me
          </h1>
          <div className="flex-container">
            {icon("facebook", "https://www.facebook.com/ShonDavidK/")}
            {icon("linkedin", "https://www.linkedin.com/in/shondavidhq/")}
            {icon("mail", "mailto: shondaivdhq@gmail.com")}
            {icon("github", "https://github.com/ShonDavid")}
            {icon("phone", "tel:= +972546249174")}
          </div>
          <h1 className="text-style-rights">
            © Made by Shon David. All Rights Reserved.
          </h1>
        </div>
      </div>
    );
  }
}

function icon(name, url) {
  return (
    <div className="wrap-circle" onClick={() => window.open(url, "_blank")}>
      <div className="inner-circle" />
      <div className={"container-image " + name} />
    </div>
  );
}

export default ContactMe;
