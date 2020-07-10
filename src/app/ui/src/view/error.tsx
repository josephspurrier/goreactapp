import React from "react";

interface Props {
  title?: string;
}

function Page(props: Props): JSX.Element {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">{props.title || `Page Not Found`}</h1>
          <h2 className="subtitle">The page is not found.</h2>
        </div>
      </section>
    </div>
  );
}

export default Page;
