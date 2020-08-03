import React, { Component } from "react";
import "./myprojects.css";
import TicTacToe from "../projects/tictactoe.jpg";
import Catan from "../projects/catan.jpg";

class MyProjects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let textForCatan = (
      <text id="text-body">
        I love to play catan with my friends, but sometimes it's really
        frustrating to set up the game board with all the parts. <br />
        On top of that, in the end of the night I have to gather and organize
        all the parts and make sure nothing has been lost. <br />
        this is why i made an online catan board game. <br />
        all I have to do now is to set the catan cards on the table, load the
        website on my smart TV and that's it! Game on! <br />
        <b>These are all the features my website has to offer:</b> <br />- A
        random game board. <br />- Random numbers on the game board. <br />- In
        case of unsatisfying game board or numbers, refreshing the website will
        load a new one. <br />- Bridges and buildings can be placed on their
        correct designated areas! <br />- The bridges and buildings colors can
        be easily adjusted. <br />
        - Place a settlement in a click, then clicking it again will turn it to
        a city
        <br />
        - Easy to use dice rolling option with a designated "roll a dice" popup
        button . <br />- Moving the thief in the desert is possible with a
        simple click on the desired resource. <br />
        <b>Additional possibilities for future features:</b> <br />- Any number
        came up on the dice after it has been rolled, will shine on the matching
        resources on the board.
        <br />- Game rooms and online cards back end support. (the basis of this
        code is ready for this feature).
        <br />
        <b>I hope you'll enjoy playing at least as much as I do!</b>
      </text>
    );
    return (
      <div className="background-my-projects">
        <div className="my-projects-container">
          <div>
            <h1 className="text-style-my-projects" id="my-projects">
              My Projects
            </h1>
            <p className="paragraphStyleHeading">
              <b>All these projects achieved in my free time.</b>
              <br />
              You can click on any project and read a brief description,
              <br />
              check my code in github and in several projects watch online
              demos.
              <br /> thank you for your support!
            </p>
          </div>
          <div className="flexContainer">
            {projectImg(Catan, "Catan Board", () =>
              this.props.handleModal(
                "Catan Board",
                textForCatan,
                "https://catan-b558a.web.app/",
                ""
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

function projectImg(backgroundImage, description, handleModal) {
  return (
    <div className="parent-project" onClick={handleModal}>
      <div
        className="child-project"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <a>{description}</a>
      </div>
    </div>
  );
}

export default MyProjects;
