import React, { Component } from "react";
import "./aboutme.css";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="grey-box">
        <br />
        <h1 className="text-style-about-me" id="about-me">
          About Me
        </h1>
        <h1 className="text-style">Education</h1>
        <div className="flexContainerImg">
          <div>
            <h2 className="paragraphStyleWhite">
              <b>2009-2012</b>
              <br /> HIGH SCHOOL
              <br /> MAKIF GIMEL - AMIT AMAL
              <br /> 10 Units at Computer Science
              <br />
              <br />
              <div className="container-image-education-ama" />
            </h2>
          </div>
          <div>
            <h2 className="paragraphStyleWhite">
              <b>2016-PRESENT</b>
              <br /> COMPUTER SCIENCE STUDENT
              <br /> BEN-GURION UNIVERSITY
              <br /> Last year of education
              <br />
              <br />
              <div className="container-image-education-bgu" />
              <br />
              <br />
            </h2>
          </div>
        </div>
        <h1 className="text-style">My Skills</h1>
        <p className="paragraphStyle">
          I work with several tools and languages:
        </p>
        <div className="flex-container-badges">
          {button("Java")}
          {button("JavaScript")}
          {button("Python")}
          {button("C")}
          {button("C++")}
          {button("C#")}
          {button("ReactJS")}
          {button("Ocaml")}
          {button("Photoshop")}
          {button("HTML")}
          {button("CSS")}
        </div>
      </div>
    );
  }
}

function button(name) {
  return (
    <div className="mobile-container">
      <p className="badge button paragraphStyle">{name}</p>
    </div>
  );
}

export default AboutMe;
