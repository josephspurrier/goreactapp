// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";

interface Attrs {
  label: string;
  name: string;
  type?: string;
  required: boolean;
  value: string;
}

// FIXME: Need to add input.
//         onInput={props.oninput}

function View(props: Attrs): JSX.Element {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          name={props.name}
          type={props.type || "text"}
          className="input"
          data-cy={props.name}
          required={props.required}
          value={props.value}
        ></input>
      </div>
    </div>
  );
}

export default View;
