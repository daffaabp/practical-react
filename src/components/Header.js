import React from "react";
import logo from "../logo.svg";


export default class Header extends React.Component {
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