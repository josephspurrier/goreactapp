// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import Submit from "@/module/submit";
import { FlashEvent, MessageType } from "@/component/flash";
import EventEmitter from "@/module/event";
import CookieStore from "@/module/cookiestore";

const UserLogin = (
  e: React.FormEvent<HTMLFormElement>,
  user: { email: string; password: string }
): Promise<void> => {
  Submit.start(e);

  return fetch("/api/v1/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.status === 200) {
        response.json().then(function (data) {
          //setState({ postId: data.id });

          Submit.finish();

          const auth = {
            accessToken: data.token,
            loggedIn: true,
          };

          CookieStore.save(auth);

          EventEmitter.dispatch(FlashEvent.showMessage, {
            message: "Login successful.",
            style: MessageType.success,
          });
          //m.route.set("/");
        });
      } else {
        response.json().then(function (data) {
          Submit.finish();
          EventEmitter.dispatch(FlashEvent.showMessage, {
            message: data.message,
            style: MessageType.warning,
          });
        });
      }
    })
    .catch((err) => {
      console.log("Error needs to be handled!", err);
    });
};

// var UserLogin = (e, user) => {
//   Submit.start(e);

//   return m
//     .request({
//       method: "POST",
//       url: "/api/v1/login",
//       body: user,
//     })
//     .then((data) => {
//       Submit.finish();

//       const auth = {
//         accessToken: data.token,
//         loggedIn: true,
//       };
//       CookieStore.save(auth);

//       Flash.success("Login successful.");
//       m.route.set("/");
//     })
//     .catch((err) => {
//       Submit.finish();
//       Flash.warning(err.response.message);
//       throw err;
//     });
// };

export default UserLogin;
