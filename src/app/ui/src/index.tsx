// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "@/view/error";

//import { Hello } from "@/Hello";

console.log("React ready.");

export interface HelloProps {
  compiler: string;
  framework: string;
}

class Page1 extends React.Component<HelloProps> {
  render() {
    return <h1>Page 1</h1>;
  }
}

class Page2 extends React.Component<HelloProps> {
  render() {
    return <h1>Page 2</h1>;
  }
}

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route exact path="/test" component={Page2} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("app-root"));
