import * as React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { showFlash, messageType } from "@/component/flash";
import Note from "@/component/note";
import "~/style/main.scss";

interface NoteObj {
  id?: string;
  message?: string;
}

interface Current {
  message: string;
}

interface Notes {
  id: string;
  message: string;
}

function Page(): JSX.Element {
  const [cookie] = useCookies(["auth"]);
  const [notes, setNotes] = useState<Notes[]>([]);
  const [current, setCurrent] = useState<Current>({ message: "" });

  const removeNote = function (id: string) {
    setNotes(
      notes.filter((v: Notes) => {
        return v.id !== id;
      })
    );
  };

  const load = function () {
    fetch("/api/v1/note", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + cookie.auth.accessToken,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then(function (data) {
            setNotes(data.notes);
          });
        } else {
          response.json().then(function () {
            showFlash("Could not load notes.", messageType.warning);
          });
        }
      })
      .catch((err) => {
        console.log("Error needs to be handled!", err);
      });
  };

  const clear = function () {
    setCurrent({ message: "" });
  };

  const submit = function (): void {
    fetch("/api/v1/note", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + cookie.auth.accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(current),
    })
      .then((response) => {
        if (response.status === 201) {
          response.json().then(function () {
            showFlash("Note created.", messageType.success);
            clear();
            load();
          });
        } else {
          response.json().then(function (data) {
            showFlash(
              "Could not update note: " + data.message,
              messageType.warning
            );
          });
        }
      })
      .catch((err) => {
        console.log("Error needs to be handled!", err);
      });
  };

  useEffect(() => {
    load();

    // Perform cleanup - equivalent to: componentWillUnmount()
    //return () => {};
  }, []);

  return (
    <section id="note-section" className="section">
      <div className="container">
        <div className="box">
          <div className="field">
            <label className="label">To Do</label>
            <div className="control">
              <input
                type="text"
                placeholder="What would you like to do?"
                className="input"
                name="note-add"
                data-cy="note-text"
                onKeyPress={(e) => {
                  if (e.key !== "Enter") {
                    return;
                  }
                  submit();
                }}
                onChange={(e) => {
                  setCurrent({ message: e.currentTarget.value });
                }}
                value={current.message}
              />
            </div>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a
                title="Add note"
                className="level-item"
                onClick={() => {
                  submit();
                }}
              >
                <span className="icon is-small has-text-success">
                  <i className="far fa-plus-square" data-cy="add-note-link"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
        <div>
          <ul id="listTodo">
            {notes.map((note: Notes) => (
              <Note
                key={note.id}
                id={note.id}
                message={note.message}
                onChange={(e: string) => {
                  note.message = e;
                }}
                removeNote={removeNote}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Page;
