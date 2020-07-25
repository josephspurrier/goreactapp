import * as React from "react";
import { useEffect, useState } from "react";
import "@/";

function API(): JSX.Element {
  const [data, setData] = useState({ posts: [], isFetching: false });

  useEffect(() => {
    fetch("/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        const auth = {
          accessToken: "",
          loggedIn: false,
        };

        if (response.status === 200) {
          response.json().then(function (data) {
            //setState({ postId: data.id });

            Submit.finish();

            //CookieStore.save(auth);

            EventEmitter.dispatch(FlashEvent.showMessage, {
              message: "Login successful.",
              style: MessageType.success,
            });
            //m.route.set("/");

            return auth;
          });
        } else {
          return response.json().then(function (data) {
            Submit.finish();
            EventEmitter.dispatch(FlashEvent.showMessage, {
              message: data.message,
              style: MessageType.warning,
            });
            return auth;
          });
        }
      })
      .catch((err) => {
        console.log("Error needs to be handled!", err);
        const auth = {
          accessToken: "",
          loggedIn: false,
        };
        return auth;
      });

    // const fetchUsers = async () => {
    //   try {
    //     setData({ ...data, isFetching: true });
    //     const response = await axios.get(POSTS_SERVICE_URL);
    //     fetch("/api/v1/login", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(user),
    //       })
    //     setData({
    //       ...data,
    //       posts: response.data.slice(0, 5),
    //       isFetching: false,
    //     });
    //   } catch (e) {
    //     console.log(e);
    //     setData({ ...data, isFetching: false });
    //   }
    // };
    // fetchUsers();
  }, []); // Runs once

  return <Login data={data.posts} isFetching={data.isFetching} />;
}

export default API;
