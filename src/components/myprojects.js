import React, { Component } from "react";
import "./myprojects.css";
import Catan from "../projects/catan.jpg";
import Sudoku from "../projects/sudoku.jpg";

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

    let textForSudoku = (
      <text id="text-body">
        For those who don’t know how to solve a sudoku,
        <br /> Each row, column, and square (9 spaces each) needs to be filled
        out with the numbers 1-9,
        <br /> without repeating any numbers within the row, column, or square.
        <br />
        <br /> <b>
          These are all the features my game has to offer:
        </b> <br /> -there is a generator for a sudoku board, meaning the amount
        of the sudoku boards are endless.
        <br /> -you can press on the buttons easy/medium/hard below the board to
        show a new board with the difficulty level you have chosen.
        <br /> -to fill the blank areas efficiently, you’ll have to click on one
        of them, press a number between 1-9, and for last press “Enter”.
        <br /> -if you filled the blank area correctly, the number will be shown
        in green color, else, in red color.
        <br />
        -There is a score for solving the game. <br />
        -The highest score is 1000/2000/3000 depends on the difficulty level
        easy/medium/hard you have chosen.
        <br /> -When all the board is solved correctly, you will get a beautiful
        animation with the score you achieved.
        <br /> -The game is also for mobile.
        <br />
        <br />
        <b>
          Thank you for your support!
          <br /> If you have any notes and want to contact me, you can find the
          information down below.{" "}
        </b>
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
                "https://github.com/ShonDavid/CatanBoard"
              )
            )}
          </div>

          <div className="flexContainer">
            {projectImg(Sudoku, "Sudoku game", () =>
              this.props.handleModal(
                "Sudoku game",
                textForSudoku,
                "https://sudoku-shani.web.app/",
                "https://github.com/ShonDavid/sudoku-board"
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
