import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRoutes } from "hookrouter";
import { CookiesProvider } from "react-cookie";
import Routes from "./router";
import ErrorPage from "@/view/error";
import Flash from "@/component/flash";
import MainLayout from "@/layout/main";
import "~/node_modules/@fortawesome/fontawesome-free/js/all.js";
import "~/style/main.scss";

function Root(): JSX.Element {
  const routeResult = useRoutes(Routes);
  return routeResult || <ErrorPage />;
}

ReactDOM.render(
  <CookiesProvider>
    <MainLayout>
      <Root />
      <Flash />
    </MainLayout>
  </CookiesProvider>,
  document.getElementById("app-root")
);
