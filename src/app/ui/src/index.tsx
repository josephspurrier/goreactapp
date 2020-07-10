// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "@/view/error";
import HomePage from "@/view/home";
import AboutPage from "@/view/about";
import MainLayout from "@/layout/main";
import "~/style/main.scss";

function Root() {
  //if (CookieStore.isLoggedIn()) return Index;
  //console.log(a);
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="*">
            <ErrorPage title="Page Not Found" />
          </Route>
        </Switch>
      </Router>
    </MainLayout>
  );
}

ReactDOM.render(<Root />, document.getElementById("app-root"));
