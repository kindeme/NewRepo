import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogging: true,
    };
  }

  render() {
    return this.state.isLogging && <div> Welcome Flore</div>;
    // return this.state.isLogging ? (
    //   <div> Welcome Flore</div>
    // ) : (
    //   <div> Welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLogging) {
    //   message = <div> Welcome Flore</div>;
    // } else {
    //   message = <div> Welcome Flore</div>;
    // }
    // return <div>{message}</div>;

    // if (this.state.isLogging) {
    //   return <div>Welcome Flore</div>;
    // } else {
    //   return <div> Welcom Guest</div>;
    // }
  }
}

export default UserGreeting;
