import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import Input from "./input";
import "~/style/main.scss";

storiesOf("Component/Input", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("Input", function () {
    const type = select(
      "Type",
      {
        text: "text",
        color: "color",
        date: "date",
        "datetime-local": "datetime-local",
        email: "email",
        hidden: "hidden",
        month: "month",
        number: "number",
        password: "password",
        range: "range",
        search: "search",
        time: "time",
        week: "week",
      },
      "text"
    );

    return (
      <Input
        label=""
        name=""
        type={type}
        required={true}
        value={text("Value", "John")}
      />
    );
  });
