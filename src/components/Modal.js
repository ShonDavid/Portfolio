import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          else this.props.handleClose();
        }}
      >
        <div className="modal-block">
          <div className="button-container">
            <button
              className="button-close"
              onClick={() => this.props.handleClose()}
            >
              X
            </button>
          </div>
          <text id="title">{this.props.title}</text>
          <div className="text-body-container">{this.props.explanation}</div>
          <div className="buttons-container">
            <button
              className="button-click"
              onClick={() => window.open(this.props.github, "_blank")}
            >
              Github Rep
            </button>
            <div className="space-mobile" />
            <button
              className="button-click"
              onClick={() => window.open(this.props.website, "_blank")}
            >
              Online Demo
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
