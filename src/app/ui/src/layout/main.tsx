import * as React from "react";
import Menu from "@/component/menu";
//import Flash from "@/component/flash";

//FIXME: Add flash.
// <Flash/>

interface Props {
  children: JSX.Element[] | JSX.Element;
}

function View(props: Props): JSX.Element {
  return (
    <div>
      <Menu />
      {props.children}
    </div>
  );
}

export default View;
