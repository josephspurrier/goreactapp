import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import AboutPage from "@/view/about";
import "~/style/main.scss";

storiesOf("View/About", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("About", () => <AboutPage />);
