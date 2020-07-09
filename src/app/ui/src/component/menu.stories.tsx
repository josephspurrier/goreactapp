import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import Menu from "./menu";
import "~/style/main.scss";

storiesOf("Component/Menu", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("Menu", () => <Menu />);
