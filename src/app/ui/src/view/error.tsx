import React from "react";

interface Attrs {
  title: string;
}

function Page(props: Attrs): JSX.Element {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">The page is not found.</h2>
        </div>
      </section>
    </div>
  );
}

export default Page;
