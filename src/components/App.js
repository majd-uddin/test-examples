import React from "react";
import NumButton from "./Button";

export default class App extends React.Component {
    render() {
      return (
        <div>
          <NumButton num="7"/>
          <NumButton num="8" />
          <NumButton num="9" />
          <br></br> <br></br>
          <NumButton num="4" />
          <NumButton num="5" />
          <NumButton num="6" />
          <br></br> <br></br>
          <NumButton num="1" />
          <NumButton num="2" />
          <NumButton num="3" />
          <br></br> <br></br>
          <NumButton num="+/-" />
          <NumButton num="0" />
          <NumButton num="." />
        </div>
      )
    }
  }