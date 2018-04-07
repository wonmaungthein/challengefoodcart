import React from "react";
import { Component } from "react";

class Testing extends Component {
  render() {
    return (
      <div>
        <h1>Testing React</h1>
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <div>
        <h2> This is a message area </h2>
        <h3>Hello there, how are you? I am Won </h3>
      </div>
    );
  }
}

export class Whole extends Component {
  render() {
    return (
      <div>
        {/* <Testing /> */}
        <Greeting />
      </div>
    );
  }
}
