import * as React from "react";
import { navigate } from "hookrouter";
import { useCookies } from "react-cookie";

function View(): JSX.Element {
  const [cookie, , removeCookie] = useCookies(["auth"]);

  const clear = function (): void {
    removeCookie("auth", { path: "/" });
  };

  const isLoggedIn = function (): boolean {
    try {
      const auth = cookie.auth;
      if (auth === undefined) {
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }

    return false;
  };

  return (
    <main>
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/" data-cy="home-link">
            <strong>goreactapp</strong>
          </a>

          <a
            id="mobile-navbar-top"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-top"
            onClick={() => {
              const mob = document.getElementById("mobile-navbar-top");
              const nav = document.getElementById("navbar-top");
              mob.classList.toggle("is-active");
              nav.classList.toggle("is-active");
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-top" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Menu</a>

              <div className="navbar-dropdown is-right">
                {!isLoggedIn() && (
                  <a
                    className="navbar-item"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </a>
                )}
                <a
                  className="navbar-item"
                  href={`https://petstore.swagger.io/?url=${location.origin}/static/swagger.json`}
                >
                  Swagger
                </a>

                <a
                  className="navbar-item"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About
                </a>
                <hr className="navbar-divider" />
                {isLoggedIn() && (
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      clear();
                      navigate("/login");
                    }}
                  >
                    Logout
                  </a>
                )}
                <div className="navbar-item">v1.0.0</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default View;
