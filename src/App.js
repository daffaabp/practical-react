import React, { Component } from "react";
import "./App.css";
import Body, {Body2, Body3} from "./components/Body";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";


class App extends Component {
 add(a, b) {
  return a + b;
 }
  render() {
    return (
      <div className="App">
        <ImageSlider />
      </div>
    );
  }
}

export default App;