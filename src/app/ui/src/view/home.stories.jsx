import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import HomePage from "@/view/home";
import "~/style/main.scss";

storiesOf("View/Home", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("Home", () => <HomePage />);
