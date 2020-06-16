import React from "react";
import FunctionalComponent from "./FunctionalComponent";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  render() {
    return (
      <React.Fragment>
        <FunctionalComponent propsName={this.state} />
      </React.Fragment>
    );
  }
}
