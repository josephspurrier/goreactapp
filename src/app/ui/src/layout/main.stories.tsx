import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import LayoutMain from "@/layout/main";
import SimplePage from "@/component/simple-page";
import "~/style/main.scss";

storiesOf("Component/Layout Main", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("Simple Page", () => (
    <LayoutMain>
      <SimplePage
        title={text("Title", "This is the Title")}
        description={text("Description", "This is a subtitle or description.")}
      >
        <div>{text("Content", "This is the content.")}</div>
      </SimplePage>
    </LayoutMain>
  ));
