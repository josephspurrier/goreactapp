import * as React from "react";

// TODO: Add link in for a.

function Page(): JSX.Element {
  const title = "Welcome";
  const subtitle = "Login was successful";

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
        <a href="/notepad" data-cy="notepad-link">
          Click here to access your Notepad.
        </a>
      </div>
    </div>
  );
}

export default Page;
