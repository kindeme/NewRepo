import React, { Component } from "react";

// use for focus in input
class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputref = React.createRef();
  }
  componentDidMount() {
    this.inputref.current.focus();
    console.log(this.inputref);
  }

  clickHandler = () => {
    alert(this.inputref.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} />
        <button onClick={this.clickHandler}></button>
      </div>
    );
  }
}

export default RefsDemo;
