import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { useHistory } from "react-router-dom";

// TODO: Add link in for a.

function Page(props: RouteComponentProps): JSX.Element {
  const title = "Welcome";
  const subtitle = "Login was successful";

  console.log(props.location.pathname);

  // redirect to new target using Router's History
  //props.history.push("/about");

  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    useHistory().push("/notepad");
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
        <a href="#" onClick={handleClick} data-cy="notepad-link">
          Click here to access your Notepad.
        </a>
      </div>
    </div>
  );
}

export default withRouter(Page);
