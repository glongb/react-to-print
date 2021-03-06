import * as React from "react";
import * as ReactDOM from "react-dom";

import { ClassComponent } from "./ClassComponent";
import { ClassComponentContextConsumer } from "./ClassComponentContextConsumer";
import { FunctionalComponent } from "./FunctionalComponent";
import { FunctionalComponentWithHook } from "./FunctionalComponentWithHook";
import "./relativecss/test.css";

interface State {
  text: string;
  isLoading: boolean;
}

class Example extends React.Component<{}, State> {
  render() {
    return (
      <>
        <ClassComponent />
        <ClassComponentContextConsumer />
        <FunctionalComponent />
        <FunctionalComponentWithHook />
      </>
    );
  }
}

ReactDOM.render(<Example/>, document.getElementById("app-root"));
