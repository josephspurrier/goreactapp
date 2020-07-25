import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import ErrorPage from "@/view/error";
import "~/style/main.scss";

export default {
  title: "View/Error",
  component: ErrorPage,
  decorators: [withKnobs, withA11y],
};

export const View = function (): JSX.Element {
  return <ErrorPage title="Page Not Found" />;
};

View.story = {
  name: "Error",
};
