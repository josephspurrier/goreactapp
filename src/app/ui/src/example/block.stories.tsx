import * as React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import Block from "@/example/block";

export default {
  title: "Example/Block",
  component: Block,
  decorators: [withKnobs, withA11y],
};

export const View = function (): JSX.Element {
  return (
    <Block>
      <span>Hello</span>
    </Block>
  );
};
View.story = {
  name: "Block",
};

export const Button = function (): JSX.Element {
  return (
    <button
      disabled={boolean("Disabled", false)}
      onClick={() => {
        action("button-click");
        console.log("Clicked!");
      }}
    >
      {text("Label", "Hello Storybook")}
    </button>
  );
};

export const DynamicText = function (): JSX.Element {
  const name = text("Name", "Joe");
  const age = number("Age", 32);
  return (
    <div>
      I am {name} and I am {age} years old.
    </div>
  );
};

export const Text = function (): JSX.Element {
  return (
    <Block>
      <div>{text("Text", "Text")}</div>
    </Block>
  );
};

export const Emoji = function (): JSX.Element {
  return (
    <Block>
      <div>
        <form>
          <span role="img" aria-label="so cool">
            😀 😎 👍 💯
          </span>
        </form>
      </div>
    </Block>
  );
};
