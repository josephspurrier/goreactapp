import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

function Page(props: RouteComponentProps): JSX.Element {
  const title = "Welcome";
  const subtitle = "Login was successful";

  function onclick(e: { preventDefault: () => void }) {
    e.preventDefault();
    props.history.push("/notepad");
  }

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
          </div>
        </div>
      </section>
      <br />
      <div className="container">
        <a href="#" onClick={onclick} data-cy="notepad-link">
          Click here to access your Notepad.
        </a>
      </div>
    </div>
  );
}

export default withRouter(Page);
