import * as React from "react";
import { useState } from "react";
import { RouteComponentProps, withRouter, Redirect } from "react-router";
//import PropTypes from "prop-types";
import UserLogin from "@/store/userlogin";
import Input from "@/component/input";

interface PageProps extends RouteComponentProps {
  email?: string;
  password?: string;
}

interface User {
  email: string;
  password: string;
}

function Page(props: PageProps): JSX.Element {
  const data = {
    title: "Login",
    subtitle: "Enter your login information below.",
  };

  const clear = () => {
    setUser({ email: "", password: "" });
  };

  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  function toRegister(e: { preventDefault: () => void }) {
    e.preventDefault();
    //props.history.push("/register");
  }

  console.log("Redrawn");

  if (loggedIn) {
    console.log("Logged in!");
    //props.history.push("/about");
    //return <Redirect to="/about" />;
  }

  // // Prefill the fields.
  // if (props.email) {
  //   user.email = props.email;
  // }
  // if (props.password) {
  //   user.password = props.password;
  // }

  return (
    <main>
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">{data.title}</h1>
            <h2 className="subtitle">{data.subtitle}</h2>
          </div>

          <div
            className="container"
            style={{ marginTop: "1em" } as React.CSSProperties}
          >
            <form
              name="login"
              onSubmit={(e) => {
                UserLogin(e, user).then(() => {
                  console.log("go!");
                  //clear();
                  //setLoggedIn(true);
                  props.history.push("/");
                });
              }}
            >
              <Input
                label="Email"
                name="email"
                type="email"
                required={true}
                onChange={(e: string) => {
                  const newUser = { ...user };
                  newUser.email = e;
                  setUser(newUser);
                }}
                value={user.email}
              />

              <Input
                label="Password"
                name="password"
                required={true}
                onChange={(e: string) => {
                  const newUser = { ...user };
                  newUser.password = e;
                  setUser(newUser);
                }}
                value={user.password}
                type="password"
              />

              <div className="field is-grouped">
                <p className="control">
                  <button
                    id="submit"
                    type="submit"
                    data-cy="submit"
                    className="button is-primary"
                  >
                    Submit
                  </button>
                </p>

                <p className="control">
                  <button
                    type="button"
                    className="button is-light"
                    onClick={() => {
                      clear();
                    }}
                  >
                    Clear
                  </button>
                </p>

                <p className="control">
                  <a href="#" className="button is-light" onClick={toRegister}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default withRouter(Page);
