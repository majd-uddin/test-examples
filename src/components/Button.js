import React from "react";
import "./Button.css";

export default class NumButton extends React.Component {

  handleClick = () => {
    this.props.clickHandler(this.props.num);
  };

  render() {
    const className = [
      "component-numbutton",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.num}</button>
      </div>
    );
  }
}
