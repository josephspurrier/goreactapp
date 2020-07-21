// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ErrorPage from "@/view/error";
import LoginPage from "@/view/login";
import HomePage from "@/view/home";
import AboutPage from "@/view/about";
import Flash from "@/component/flash";
import MainLayout from "@/layout/main";
import CookieStore from "@/module/cookiestore";
import "~/style/main.scss";

function Root() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            {CookieStore.isLoggedIn() ? <HomePage /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>

        <Flash />
      </MainLayout>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById("app-root"));
