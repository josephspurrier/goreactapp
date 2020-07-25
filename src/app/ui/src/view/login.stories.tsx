import * as React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import LayoutMain from "@/layout/main";
import LoginPage from "@/view/login";
import Flash from "@/component/flash";
import { rest } from "msw";
import { worker } from "@/mock/browser";
import "~/style/main.scss";

export default {
  title: "View/Login",
  component: LoginPage,
  decorators: [withKnobs, withA11y],
};

export const Login = (): JSX.Element => {
  const shouldFail = boolean("Fail", false);

  worker.use(
    ...[
      rest.post("/api/v1/login", (req, res, ctx) => {
        if (shouldFail) {
          return res(
            ctx.status(400),
            ctx.json({
              message: "There was an error.",
            })
          );
        } else {
          return res(
            ctx.status(200),
            ctx.json({
              message: "Ok cool",
            })
          );
        }
      }),
    ]
  );

  return (
    <LayoutMain>
      <LoginPage
        email={text("Email", "jsmith@example.com")}
        password={text("Password", "password")}
      />
      <Flash />
    </LayoutMain>
  );
};
