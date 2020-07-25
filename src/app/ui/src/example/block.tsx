// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function Block(props: Props): JSX.Element {
  return <div>{props.children}</div>;
}

export default Block;
