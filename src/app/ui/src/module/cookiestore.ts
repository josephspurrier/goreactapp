import * as Cookie from "js-cookie";

interface Auth {
  accessToken: string;
  loggedIn: boolean;
}

const CookieStore = {
  cookieName: "auth",
  save: function (props: Auth): void {
    Cookie.set(CookieStore.cookieName, props);
  },
  clear: function (): void {
    Cookie.remove(CookieStore.cookieName);
  },
  bearerToken: function (): string {
    const auth = Cookie.get(CookieStore.cookieName);
    if (auth === undefined) {
      return "";
    }

    const v = JSON.parse(auth);
    return "Bearer " + v.accessToken;
  },
  isLoggedIn: function (): boolean {
    try {
      const auth = Cookie.get(CookieStore.cookieName);
      if (auth === undefined) {
        return false;
      }
      return true;
    } catch (err) {
      console.log(err);
    }

    return false;
  },
};

export default CookieStore;
