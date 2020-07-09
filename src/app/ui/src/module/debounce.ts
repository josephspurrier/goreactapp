// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

interface Props {
  id: string;
  func: () => void;
  timeout: number;
}

const Debounce = {
  m: new Map(),
  run(props: Props): void {
    if (this.m[props.id]) {
      clearTimeout(this.m[props.id]);
    }
    this.m[props.id] = setTimeout(props.func, props.timeout);
  },
};

export default Debounce;
