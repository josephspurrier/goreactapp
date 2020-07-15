// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import Submit from "@/module/submit";
import Flash from "@/component/flash";
import CookieStore from "@/module/cookiestore";

const UserLogin = (e, user) => {
  Submit.start(e);

  return fetch("/api/v1/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      //setState({ postId: data.id });

      Submit.finish();

      const auth = {
        accessToken: data.token,
        loggedIn: true,
      };
      CookieStore.save(auth);

      Flash.success("Login successful.");
      //m.route.set("/");
    })
    .catch((err) => {
      Submit.finish();
      Flash.warning(err.response.message);
      throw err;
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
