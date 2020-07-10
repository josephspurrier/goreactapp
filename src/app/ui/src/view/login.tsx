import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
//import PropTypes from "prop-types";
import UserLogin from "@/store/userlogin";
import Input from "@/component/input";

interface PageProps extends RouteComponentProps {
  email: string;
  password: string;
}

function Page(props: PageProps) {
  let user = {
    email: "",
    password: "",
  };

  const data = {
    title: "Login",
    subtitle: "Enter your login information below.",
  };

  const clear = () => {
    user = {
      email: "",
      password: "",
    };
  };

  function toRegister(e: { preventDefault: () => void }) {
    e.preventDefault();
    props.history.push("/register");
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
            style={{ "margin-top": "1em" } as React.CSSProperties}
          >
            <form
              name="login"
              onSubmit={(e) => {
                UserLogin(e, user).then(() => {
                  clear();
                });
              }}
            >
              <Input
                label="Email"
                name="email"
                required={true}
                oninput={(e: { target: { value: string } }) => {
                  user.email = e.target.value;
                }}
                value={user.email}
              />

              <Input
                label="Password"
                name="password"
                required={true}
                oninput={(e: { target: { value: string } }) => {
                  user.password = e.target.value;
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
