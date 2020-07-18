import React, { useState, useEffect, useRef } from "react";
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
  showMessage = "showMessage",
}

interface FlashMessage {
  message: string;
  style: MessageType;
}

interface Props {
  timeout?: number;
  prepend?: boolean;
}

const Manager = function (props: Props): JSX.Element {
  //const [firstLaunch, setFirstLaunch] = useState<boolean>(false);
  //const [showtime, setShowtime] = useState<number>(props.timeout || 4000);
  //const [prepend, setPrepend] = useState<boolean>(props.prepend || false);
  const [list, setList] = useState<FlashMessage[]>([]);

  const showtime = props.timeout || 4000;
  const prepend = props.prepend || false;

  // Use a ref to access the current count value in
  // an async callback.
  const listRef = useRef(list);
  listRef.current = list;

  // const showMessage = function (message: string, style: MessageType): void {
  //   addFlash(message, MessageType.success);
  // };

  // const failed = function (message: string): void {
  //   this.addFlash(message, "is-danger");
  // };

  // const warning = function (message: string): void {
  //   this.addFlash(message, "is-warning");
  // };

  // const primary = function (message: string): void {
  //   this.addFlash(message, "is-primary");
  // };

  // const link = function (message: string): void {
  //   this.addFlash(message, "is-link");
  // };

  // const info = function (message: string): void {
  //   this.addFlash(message, "is-info");
  // };

  // const dark = function (message: string): void {
  //   this.addFlash(message, "is-dark");
  // };

  const showMessage = (msg: FlashMessage): void => {
    // Don't show a message if zero.
    if (showtime === 0) {
      return;
    }

    // Check if the messages should stack in reverse order.
    const newList = [...list];
    if (prepend === true) {
      newList.unshift(msg);
    } else {
      newList.push(msg);
    }
    setList(newList);

    // Show forever if -1.
    if (showtime > 0) {
      setTimeout(function () {
        removeFlash(listRef.current, msg);
      }, showtime);
    }
  };

  const removeFlash = (arr: FlashMessage[], i: FlashMessage): void => {
    // Prevent stale closure: must use ref of list instead of list.
    // https://github.com/facebook/react/issues/14010
    setList(
      arr.filter((v: FlashMessage) => {
        return v !== i;
      })
    );
  };

  useEffect(() => {
    let mounted = true;
    EventEmitter.subscribe(FlashEvent.showMessage, (msg: FlashMessage) => {
      if (!mounted) {
        console.log("CAUGHT!");
        return false;
      }
      showMessage(msg);
    });

    return () => {
      mounted = false;
      EventEmitter.unsubscribe(FlashEvent.showMessage);
    };
  });

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
      {list.map((i: FlashMessage) => (
        <div key={uid(i)} className={`notification ${i.style}`}>
          {i.message}
          <button
            className="delete"
            onClick={() => {
              removeFlash(list, i);
            }}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default { Manager };
