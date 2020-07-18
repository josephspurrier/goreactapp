import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  select,
  button,
  number,
  boolean,
} from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import Flash, { FlashEvent } from "@/component/flash2";
import EventEmitter from "@/module/event";
import "~/style/main.scss";

export default {
  title: "Component/Flash",
  component: Flash,
  decorators: [withKnobs, withA11y],
};

export const Success = function (): JSX.Element {
  //Flash.Manager();
  return (
    <Flash timeout={-1} message={text("Text", "This is a success message.")} />
  );
};

// export const SuccessDispatch = function (): JSX.Element {
//   setTimeout(function () {
//     EventEmitter.dispatch(
//       FlashEvent.timeout,
//       number("Timeout (milliseconds)", 4000)
//     );
//     EventEmitter.dispatch(
//       FlashEvent.success,
//       text("Text", "This is a success message.")
//     );
//   }, 250);

//   return (
//     <Flash.Manager
//       timeout={-1}
//       message={text("Text", "This is a success message.")}
//     />
//   );
// };

// storiesOf("Component/Flash", module)
//   .addDecorator(withKnobs)
//   .addDecorator(withA11y)
//   .add("Success", function () {
//     //Flash.timeout = -1;
//     //Flash.success(text("Text", "This is a success message."));
//     //Flash.clear();

//     setTimeout(function () {
//       EventEmitter.dispatch(
//         FlashEvent.timeout,
//         number("Timeout (milliseconds)", 4000)
//       );
//       EventEmitter.dispatch(
//         FlashEvent.success,
//         text("Text", "This is a success message.")
//       );
//     }, 250);

//     return (
//       <Flash
//         timeout={-1}
//         message={text("Text", "This is a success message.")}
//       />
//     );
//   });
// .add("Failed", function () {
//   Flash.timeout = -1;
//   Flash.failed(text("Text", "This is a failed message."));
//   //Flash.clear();
//   return <Flash />;
// })
// .add("Warning", function () {
//   Flash.timeout = -1;
//   Flash.warning(text("Text", "This is a warning message."));
//   //Flash.clear();
//   return <Flash />;
// })
// .add("Primary", function () {
//   Flash.timeout = -1;
//   Flash.primary(text("Text", "This is a parimary message."));
//   //Flash.clear();
//   return <Flash />;
// })
// .add("Link", function () {
//   Flash.timeout = -1;
//   Flash.link(text("Text", "This is a link message."));
//   //Flash.clear();
//   return <Flash />;
// })
// .add("Info", function () {
//   Flash.timeout = -1;
//   Flash.info(text("Text", "This is a info message."));
//   //Flash.clear();
//   return <Flash />;
// })
// .add("Dark", function () {
//   Flash.timeout = -1;
//   Flash.dark(text("Text", "This is a dark message."));
//   //Flash.clear();
//   return <Flash />;
// })
// .add("Action", function () {
//   Flash.timeout = number("Timeout (milliseconds)", "2000");
//   Flash.prepend = boolean("Prepend", false);
//   const s = select(
//     "Type",
//     {
//       success: "success",
//       failed: "failed",
//       warning: "warning",
//       primary: "primary",
//       link: "link",
//       info: "info",
//       dark: "dark",
//     },
//     "success"
//   );
//   Flash[s](text("Text", "This is a test message."));
//   button("Show Message", () => {});
//   //Flash.clear();
//   return <Flash />;
// });
