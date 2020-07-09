import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import ErrorPage from "@/view/error";
import "~/style/main.scss";

storiesOf("View/Error", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("Error", () => <ErrorPage title="Page Not Found" />);
