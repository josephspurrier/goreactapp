import * as React from "react";
import LoginPage from "@/view/login";
import HomePage from "@/view/home";
import AboutPage from "@/view/about";

const routes = {
  "/": () => <HomePage />,
  "/login": () => <LoginPage />,
  "/about": () => <AboutPage />,
};

export default routes;
