// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "@/view/error";
import HomePage from "@/view/home";
import AboutPage from "@/view/about";
import MainLayout from "@/layout/main";
import CookieStore from "@/module/cookiestore";
import "~/style/main.scss";

function Root() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            {CookieStore.isLoggedIn() ? <HomePage /> : <AboutPage />}
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </MainLayout>
  );
}

ReactDOM.render(<Root />, document.getElementById("app-root"));
