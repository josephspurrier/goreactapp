import * as React from "react";
import SimplePage from "@/component/simple-page";

function content(): JSX.Element {
  return (
    <main>
      This shows you how to build a website using <strong>Mithril</strong>,{" "}
      <strong>Go</strong>, and <strong>Bulma </strong>
    </main>
  );
}

function Page(): JSX.Element {
  const title = "About";

  return (
    <SimplePage title={title} description="">
      {content()}
    </SimplePage>
  );
}

export default Page;
