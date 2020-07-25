import * as React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import RegisterPage from "@/view/register";
import Flash from "@/component/flash";
import { rest } from "msw";
import { worker } from "@/mock/browser";
import "~/style/main.scss";

export default {
  title: "View/Register",
  component: RegisterPage,
  decorators: [withKnobs, withA11y],
};

export const register = (): JSX.Element => {
  const shouldFail = boolean("Fail", false);

  worker.use(
    ...[
      rest.post("/api/v1/register", (req, res, ctx) => {
        if (shouldFail) {
          return res(
            ctx.status(400),
            ctx.json({
              message: "There was an error.",
            })
          );
        } else {
          return res(
            ctx.status(201),
            ctx.json({
              message: "ok",
            })
          );
        }
      }),
    ]
  );

  return (
    <main>
      <RegisterPage
        firstName={text("First Name", "Joe")}
        lastName={text("Last Name", "Smith")}
        email={text("Email", "jsmith@example.com")}
        password={text("Password", "password")}
      />
      <Flash />
    </main>
  );
};
