/* eslint-disable react/display-name */
import * as React from "react";
import LoginPage from "@/view/login";
import HomePage from "@/view/home";
import AboutPage from "@/view/about";
import RegisterPage from "@/view/register";
import NotepadPage from "@/view/notepad";

const routes = {
  "/": (): JSX.Element => <HomePage />,
  "/login": (): JSX.Element => <LoginPage />,
  "/about": (): JSX.Element => <AboutPage />,
  "/register": (): JSX.Element => <RegisterPage />,
  "/notepad": (): JSX.Element => <NotepadPage />,
};

export default routes;
