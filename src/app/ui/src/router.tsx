/* eslint-disable react/display-name */
import * as React from "react";
import { useRoutes } from "hookrouter";
import { useCookies } from "react-cookie";
import LoginPage from "@/view/login";
import HomePage from "@/view/home";
import AboutPage from "@/view/about";
import RegisterPage from "@/view/register";
import NotepadPage from "@/view/notepad";
import ErrorPage from "@/view/error";
import { navigate } from "hookrouter";

const routes = {
  "/login": (): JSX.Element => <LoginPage />,
  "/about": (): JSX.Element => <AboutPage />,
  "/register": (): JSX.Element => <RegisterPage />,
  "/*": (): JSX.Element => <AuthPages />,
};

const authedRoutes = {
  notepad: (): JSX.Element => <NotepadPage />,
  "/": (): JSX.Element => <HomePage />,
};

function AuthPages(): JSX.Element {
  const [cookie] = useCookies(["auth"]);

  const isLoggedIn = function (): boolean {
    try {
      const auth = cookie.auth;
      if (auth === undefined) {
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }

    return false;
  };

  const routeResult = useRoutes(authedRoutes);

  if (!isLoggedIn()) {
    // Workaround: https://github.com/Paratron/hookrouter/issues/110
    setTimeout(() => {
      navigate("/login");
    }, 0);
    return null;
  }

  return routeResult || <ErrorPage />;
}

export default routes;
