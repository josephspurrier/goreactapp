import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import Block from "@/example/block";

storiesOf("Example/Block", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("Block", () => (
    <Block>
      <span>Hello</span>
    </Block>
  ))
  .add("Button", () => (
    <button
      disabled={boolean("Disabled", false)}
      onClick={() => {
        action("button-click");
        console.log("Clicked!");
      }}
    >
      {text("Label", "Hello Storybook")}
    </button>
  ))
  .add("DynamicText", () => {
    const name = text("Name", "Joe");
    const age = number("Age", 32);
    return (
      <div>
        I am {name} and I am {age} years old.
      </div>
    );
  })
  .add("Text", () => (
    <Block>
      <div>{text("Text", "Text")}</div>
    </Block>
  ))
  .add("Emoji", () => (
    <Block>
      <div>
        <form>
          <span role="img" aria-label="so cool">
            😀 😎 👍 💯
          </span>
        </form>
      </div>
    </Block>
  ));
