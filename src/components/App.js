import React from "react";
import NumButton from "./Button";
import Results from "./Result";

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        final: 0,
        first: 0,
        operation: "",
        status: "",
        second: 0,
      };
      // This binding is necessary to make `this` work in the callback
      this.parentMethod = this.parentMethod.bind(this);
    }
    parentMethod (data) {
      // alert("hello " + data);
      if (isNaN(data)) {
        this.setState(state => ({
          operation: data,
          status: this.state.first + data,
        }));
        if (data === "C") {
          this.setState(state => ({
            first: 0,
            second: 0,
            final: 0,
            status: "",
          }))
        }
        if (data === "=") {
          this.setState(state => ({
            status: this.state.first + this.state.operation + this.state.second + data
          }));
          if (this.state.operation === "+") {
            var ans = parseInt(this.state.first) + parseInt(this.state.second)
            this.setState(state => ({
              final: ans,
              first: ans,
            }));
          }
          if (this.state.operation === "x") {
            var ans = parseInt(this.state.first) * parseInt(this.state.second)
            this.setState(state => ({
              final: ans,
              first: ans,
            }));
           }
          if (this.state.operation === "/") {
            var ans = parseFloat(this.state.first) / parseFloat(this.state.second)
            this.setState(state => ({
              final: ans,
              first: ans,
            }));
          }
          if (this.state.operation === "-") {
            var ans = parseInt(this.state.first) - parseInt(this.state.second)
            this.setState(state => ({
              final: ans,
              first: ans,
            }));
          }
        }
      } else {
        if (this.state.first === 0) {
        this.setState(state => ({
          first: data,
          final: data
        }));
      } else {
        this.setState(state => ({
          second: data,
          final: data
        }));
        }
      }
    }  
    render() {
      return (
        <div>
          <Results smallVal={this.state.status} bigVal={this.state.final}/>
          <br></br>
          <NumButton num="C" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="( )" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="%" handleClick={(data) => this.parentMethod(data)}/>
          <NumButton num="/" handleClick={(data) => this.parentMethod(data)}/>
          <br></br> <br></br>
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