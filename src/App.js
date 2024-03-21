import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const Body = props => (<div>
  <p className="App-intro">{props.text}</p>
  <p className="App-intro">{props.text2}</p>
  <p className="App-intro">{props.myFunc(1,2) }</p>
</div>
);

class Header extends Component {
  render() {
  const objectA = JSON.stringify(this.props.myObj.a)
    return (
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.num}</div>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myFunc(10, 12)}</div>
        <div>{objectA}</div>
      </header>
    );
  }
}

class App extends Component {
 add(a, b) {
  return a + b;
 }
  render() {
    return (
      <div className="App">
        <Header 
        title={"Hello"} 
        num={7}
        myArr={[1, 2, 3]}
        myFunc = {this.add}
        myObj={{ 
          a: 5,
          b: 6
         }}
         />
        <Body myFunc={this.add} text="I'am Cool" text2="I'am also Cool2" />
        <Body myFunc={this.add} text="I'am Cool" text2="I'am also Cool2" />
      </div>
    );
  }
}

export default App;