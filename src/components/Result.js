import React from "react";
import "./Results.css"

export default class Results extends React.Component {
    render() {
        return (
        <div className="results-main">
            <div className="small">{this.props.smallVal}</div>
            <div className="big">{this.props.bigVal}</div>
        </div>
        );
    }
}