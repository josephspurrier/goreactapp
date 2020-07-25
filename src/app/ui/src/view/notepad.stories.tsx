import * as React from "react";
import { useState } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import NotepadPage from "@/view/notepad";
import Flash from "@/component/flash";
import { rest } from "msw";
import { worker } from "@/mock/browser";
import "~/node_modules/@fortawesome/fontawesome-free/js/all.js";
import "~/style/main.scss";

export default {
  title: "View/Notepad",
  component: NotepadPage,
  decorators: [withKnobs, withA11y],
};

interface Note {
  id: string;
  message: string;
}

interface Message {
  message: string;
}

function randId(): string {
  const min = 10000;
  const max = 99999999999999;
  const randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum).toString();
}

export const notepad = (): JSX.Element => {
  const shouldFail = boolean("Fail", false);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "6e8568e5-2632-7c8d-b448-ec82772ed4ec",
      message: "foo",
    },
    {
      id: "a3969708-bf1c-efd4-9d98-d8d5a217cd93",
      message: "bar",
    },
  ]);

  worker.use(
    ...[
      rest.get("/api/v1/note", (req, res, ctx) => {
        if (shouldFail) {
          return res(
            ctx.status(400),
            ctx.json({
              message: "There was an error.",
            })
          );
        } else {
          return res(
            ctx.status(200),
            ctx.json({
              notes: notes,
            })
          );
        }
      }),
      rest.delete("/api/v1/note/:noteId", (req, res, ctx) => {
        if (shouldFail) {
          return res(
            ctx.status(400),
            ctx.json({
              message: "There was an error.",
            })
          );
        } else {
          const { noteId } = req.params;
          console.log("Found:", noteId);
          return res(
            ctx.status(200),
            ctx.json({
              message: "ok",
            })
          );
        }
      }),
      rest.post("/api/v1/note", (req, res, ctx) => {
        if (shouldFail) {
          return res(
            ctx.status(400),
            ctx.json({
              message: "There was an error.",
            })
          );
        } else {
          const m = req.body as Message;
          const id = randId();
          const newList = [...notes];
          newList.push({ id: id, message: m.message });
          setNotes(newList);
          return res(
            ctx.status(201),
            ctx.json({
              message: "ok",
            })
          );
        }
      }),
      rest.put("/api/v1/note/:noteId", (req, res, ctx) => {
        if (shouldFail) {
          return res(
            ctx.status(400),
            ctx.json({
              message: "There was an error.",
            })
          );
        } else {
          const { noteId } = req.params;
          console.log("Found:", noteId);
          return res(
            ctx.status(200),
            ctx.json({
              message: "ok",
            })
          );
        }
      }),
    ]
  );

  return (
    <main>
      <NotepadPage />
      <Flash />
    </main>
  );
};
