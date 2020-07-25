import * as React from "react";
import { useState } from "react";
import { navigate } from "hookrouter";
import Input from "@/component/input";
import Submit from "@/module/submit";
import { showFlash, messageType } from "@/component/flash";

const data = {
  title: "Register",
  subtitle: "Enter your information below.",
};

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

function Page(): JSX.Element {
  // // Prefill the fields.
  // if (vnodeInitial.attrs.firstName) {
  //   UserRegister.user.first_name = vnodeInitial.attrs.firstName;
  // }
  // if (vnodeInitial.attrs.lastName) {
  //   UserRegister.user.last_name = vnodeInitial.attrs.lastName;
  // }
  // if (vnodeInitial.attrs.email) {
  //   UserRegister.user.email = vnodeInitial.attrs.email;
  // }
  // if (vnodeInitial.attrs.password) {
  //   UserRegister.user.password = vnodeInitial.attrs.password;
  // }

  const clear = () => {
    setUser({ first_name: "", last_name: "", email: "", password: "" });
  };

  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

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
                e.preventDefault();
                Submit.start(e);
                fetch("/api/v1/register", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(user),
                })
                  .then((response) => {
                    if (response.status === 201) {
                      response.json().then(function () {
                        clear();
                        Submit.finish();

                        showFlash("User registered.", messageType.success);

                        navigate("/login");
                      });
                    } else {
                      response.json().then(function (data) {
                        Submit.finish();
                        showFlash(data.message, messageType.warning);
                      });
                    }
                  })
                  .catch((err) => {
                    console.log("Error needs to be handled!", err);
                  });
              }}
            >
              <Input
                label="First Name"
                name="first_name"
                type="text"
                required={true}
                onChange={(e: string) => {
                  const newUser = { ...user };
                  newUser.first_name = e;
                  setUser(newUser);
                }}
                value={user.first_name}
              />

              <Input
                label="Last Name"
                name="last_name"
                type="text"
                required={true}
                onChange={(e: string) => {
                  const newUser = { ...user };
                  newUser.last_name = e;
                  setUser(newUser);
                }}
                value={user.last_name}
              />

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
                    Create Account
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
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;
