import * as React from "react";
import CookieStore from "@/module/cookiestore";

// FIXME: Need to fix the LINKs below and the page redirect.

function View(): JSX.Element {
  const logout = () => {
    CookieStore.clear();
    //m.route.set("/");
  };

  return (
    <main>
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <link className="navbar-item" href="/" data-cy="home-link">
            <strong>gomithrilapp</strong>
          </link>

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
                {!CookieStore.isLoggedIn() && (
                  <link className="navbar-item" href="/login">
                    Login
                  </link>
                )}
                <a
                  className="navbar-item"
                  href={`https://petstore.swagger.io/?url=${location.origin}/static/swagger.json`}
                >
                  Swagger
                </a>
                <link className="navbar-item" href="/about">
                  About
                </link>
                <hr className="navbar-divider" />
                {CookieStore.isLoggedIn() && (
                  <a
                    className="dropdown-item"
                    onClick={() => {
                      logout();
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
