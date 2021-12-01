import React, { Component } from "react";

export default class MyClass extends Component {
  render() {
    const { name, roll } = this.props;

    return (
      <div>
        <h1> name: {name}</h1>
        <h2>Roll : {roll}</h2>
      </div>
    );
  }
}
