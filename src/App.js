import React, { Component } from "react";
import "./App.css";
import Body, {Body2, Body3} from "./components/Body";
import Header from "./components/Header";
import Counter from "./components/Counter";


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
         
        <Body2 />
        <Body3 />
        <Body myFunc={this.add} text="I'am Cool" text2="I'am also Cool2" />
        <Counter initialCount={0} />
        <Counter initialCount={10} />
      </div>
    );
  }
}

export default App;