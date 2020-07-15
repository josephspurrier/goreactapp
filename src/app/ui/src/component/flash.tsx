import * as React from "react";
import { uid } from "react-uid";
import EventEmitter from "@/module/event";

// Create a flash message class with Bulma.
// http://bulma.io/documentation/components/message/

export enum MessageType {
  success = "is-success",
  failed = "is-danger",
  warning = "is-warning",
  primary = "is-primary",
  link = "is-link",
  info = "is-info",
  dark = "is-dark",
}

export enum FlashEvent {
  timeout = "timeout",
  success = "success",
}

interface FlashMessage {
  message: string;
  style: string;
}

interface State {
  list: Array<FlashMessage>;
  messageType: MessageType;
  timeout: number;
  prepend: boolean;
  message: string;
  id: number;
}

interface Props {
  message: string;
  timeout?: number;
  prepend?: boolean;
}

let counter: number;

class Flash extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    if (!counter) {
      counter = 0;
    }
    this.state = {
      list: [],
      timeout: props.timeout || 4000,
      prepend: props.prepend || false,
      messageType: MessageType.success,
      message: props.message,
      id: counter++,
    };

    EventEmitter.subscribe(FlashEvent.timeout, (event: number) =>
      this.updateTimeout(event)
    );
    EventEmitter.subscribe(FlashEvent.success, (event: string) =>
      this.success(event)
    );
  }

  updateTimeout(timeout: number): void {
    this.setState({ timeout: timeout });
  }

  success(message: string): void {
    this.addFlash(message, "is-success");
  }

  //let list:Array<FlashMessage> = [];

  //let timeout= 4000; // milliseconds

  //let prepend = false;

  // success(message: string): void {
  //   this.addFlash(message, "is-success");
  // }

  // failed(message: string): void {
  //   this.addFlash(message, "is-danger");
  // }

  // warning(message: string): void {
  //   this.addFlash(message, "is-warning");
  // }

  // primary(message: string): void {
  //   this.addFlash(message, "is-primary");
  // }

  // link(message: string): void {
  //   this.addFlash(message, "is-link");
  // }

  // info(message: string): void {
  //   this.addFlash(message, "is-info");
  // }

  // dark(message: string): void {
  //   this.addFlash(message, "is-dark");
  // }

  addFlash(message: string, style: string): void {
    // Don't show a message if zero.
    if (this.state.timeout === 0) {
      return;
    }

    const msg = {
      message: message,
      style: style,
    };

    // Check if the messages should stack in reverse order.
    const newList = [...this.state.list];
    if (this.state.prepend === true) {
      newList.unshift(msg);
    } else {
      newList.push(msg);
    }
    this.setState({ list: newList });

    // Show forever if -1.
    if (this.state.timeout > 0) {
      setTimeout(() => {
        this.removeFlash(msg);
      }, this.state.timeout);
    }
  }

  removeFlash(i: FlashMessage): void {
    this.setState({
      list: this.state.list.filter((v: FlashMessage) => {
        return v !== i;
      }),
    });
  }

  // clear(): void {
  //   this.list = [];
  // }

  componentWillUnmount(): void {
    console.log("removed");
    this.setState({ list: [] });
  }

  render(): JSX.Element {
    return (
      <div
        style={
          {
            marginTop: "1em",
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 100,
            margin: 0,
          } as React.CSSProperties
        }
      >
        {this.state.list.map((i: FlashMessage) => (
          <div key={uid(i)} className={`notification ${i.style}`}>
            {i.message}
            <button
              className="delete"
              onClick={() => {
                this.removeFlash(i);
              }}
            ></button>
          </div>
        ))}
      </div>
    );
  }
}

export default Flash;
