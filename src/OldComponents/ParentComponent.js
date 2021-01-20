import React, { Component } from "react";
import CildComponent from "./CildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} form ${childName}`);
  }

  render() {
    return (
      <div>
        <CildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
