import React from "react";
import NumButton from "./Button";
import Results from "./Result";

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { final: 0};
      // This binding is necessary to make `this` work in the callback
      this.parentMethod = this.parentMethod.bind(this);
    }
    parentMethod (data) {
      // alert("hello " + data);
      this.setState(state => ({
        final: data
      }));
    }  
    render() {
      return (
        <div>
          <Results val={this.state.final}/>
          <br></br>
          <NumButton num="7" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="8" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="9" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="x" handleClick={(data) => this.parentMethod(data)}/>
          <br></br> <br></br>
          <NumButton num="4" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="5" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="6" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="-" handleClick={(data) => this.parentMethod(data)}/>
          <br></br> <br></br>
          <NumButton num="1" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="2" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="3" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="+" handleClick={(data) => this.parentMethod(data)}/>
          <br></br> <br></br>
          <NumButton num="+/-" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="0" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="." handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="=" handleClick={(data) => this.parentMethod(data)}/>
        </div>
      )
    }
  }