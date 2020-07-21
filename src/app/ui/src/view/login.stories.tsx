import * as React from "react";
//import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import LayoutMain from "@/layout/main";
import LoginPage from "@/view/login";
import Flash from "@/component/flash";
//import MockRequest from "@/module/mockrequest";
import "~/style/main.scss";

export default {
  title: "View/Login",
  component: LoginPage,
  decorators: [withKnobs, withA11y],
};

export const Login = (): JSX.Element => {
  // const s = select(
  //   "Operation",
  //   {
  //     LoginSuccessful: "opt1",
  //     LoginIncorrect: "opt2",
  //   },
  //   "opt1"
  // );
  // switch (s) {
  //   case "opt1":
  //     MockRequest.ok({});
  //     break;
  //   case "opt2":
  //     MockRequest.badRequest("Login information does not match.");
  //     break;
  //   default:
  //     MockRequest.badRequest("There is a problem with the storybook.");
  // }

  // Set the state.
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  return (
    <LayoutMain>
      <Router>
        <LoginPage
          email={text("Email", "jsmith@example.com")}
          password={text("Password", "password")}
        />
        <Flash />
      </Router>
    </LayoutMain>
  );
};

// export const login = () => ({
//   oninit: () => {},
//   view: () => (
//     <main>
//       <LoginPage
//         email={text("Email", "jsmith@example.com")}
//         password={text("Password", "password")}
//       />
//       <Flash />
//     </main>
//   ),
// });
