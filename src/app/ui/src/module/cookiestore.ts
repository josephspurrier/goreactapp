import Cookie from "js-cookie";

interface SaveAttrs {
  auth: string;
}

const CookieStore = {
  cookieName: "auth",
  save: function (props: SaveAttrs): void {
    Cookie.set(CookieStore.cookieName, props.auth);
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
