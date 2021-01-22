import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kindeme",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Kindeme",
      });
    }, 2000);
  }
  render() {
    console.log(
      "^^^^^^^^^^^^^^^^^^^^^^^^^Parent component*********************"
    );
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    );
  }
}

export default ParentCom;
