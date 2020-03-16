import React from "react";
import "./Button.css";

export default class NumButton extends React.Component {

  render() {
    const className = [
      "component-numbutton",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={() => this.props.handleClick(this.props.num)}>{this.props.num}</button>
      </div>
    );
  }
}
