import React from "react";

class Welcome extends React.Component {
  state = {
    name: "Sarah",
  };
  handleClick = () => this.setState({ name: "CR7" });
  render() {
    return (
      <>
        <h1> {this.state.name}</h1>
        <button onClick={this.handleClick}> ClickMe</button>
      </>
    );
  }
}

export default Welcome;
