import { setupWorker } from "msw";
import { handlers } from "./handler";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

// worker.start({
//   serviceWorker: {
//     url: "/static/mockServiceWorker.js",
//   },
// });
