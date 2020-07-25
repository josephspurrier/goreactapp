import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import AboutPage from "@/view/about";
import "~/style/main.scss";

export default {
  title: "View/About",
  component: AboutPage,
  decorators: [withKnobs, withA11y],
};

export const View = function (): JSX.Element {
  return <AboutPage />;
};

View.story = {
  name: "About",
};
