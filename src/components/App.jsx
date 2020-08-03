import React, { Component } from "react";
import "./App.css";
import Home from "./home";
import AboutMe from "./aboutme";
import MyProjects from "./myprojects";
import ContactMe from "./contactme";
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      menuClicked: false,
      thePosition: window.pageYOffset,
      loading: true,
      show: false,
      title: "",
      explanation: "",
      website: "",
      github: "",
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleModal(title, explanation, website, github) {
    this.setState({
      show: true,
      title: title,
      explanation: explanation,
      website: website,
      github: github,
    });
    console.log("title=", title);
  }

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loader">
          <h1 className="loader-text">SD</h1>
        </div>
      );
    }
    let handleClick = () => {
      this.setState({ menuClicked: !this.state.menuClicked });
    };
    return (
      <div className="background-div">
        <div className={"sideMenu " + (this.state.menuClicked && "clicked")}>
          <ul className="list-menu">
            <li onClick={() => (window.location.href = "#home")}>Home</li>
            <li onClick={() => (window.location.href = "#about-me")}>
              About Me
            </li>
            <li onClick={() => (window.location.href = "#my-projects")}>
              My Projects
            </li>
            <li onClick={() => (window.location.href = "#contact-me")}>
              Contact Me
            </li>
          </ul>
        </div>
        <div
          className={"container " + (this.state.menuClicked && "change")}
          onClick={() => handleClick()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        {this.state.show && (
          <Modal
            handleShow={this.handleShow}
            handleClose={this.handleClose}
            title={this.state.title}
            explanation={this.state.explanation}
            website={this.state.website}
            github={this.state.github}
          />
        )}
        <div className="App">
          <Home />
          <AboutMe />
          <MyProjects handleModal={this.handleModal} />
          <ContactMe />
        </div>
      </div>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
