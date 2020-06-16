import React from "react";
import functionalComponent from "./functionalComponent";

export default class classComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <React.Fragment>
        <functionalComponent propsName={this.state} />
      </React.Fragment>
    );
  }
}
