import React from "react";
import "./Results.css"

export default class Results extends React.Component {
    render() {
        return (
        <div className="results-main">
            <div>{this.props.val}</div>
        </div>
        );
    }
}