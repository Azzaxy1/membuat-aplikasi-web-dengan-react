import React from "react";
import NotesList from "./NotesList";
import NotesAdd from "./NotesAdd";
import reactIcon from "../assets/react.png";
import NotesSearch from "./NotesSearch";

import { getInitialData } from "../utils/index";

export class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: archived,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  onSearchHandler(e) {
    this.setState({
      search: e,
    });
  }

  onArchiveHandler() {}

  render() {
    let filterSearch = this.state.notes.filter((note) =>
      note.title
        .toLowerCase()
        .includes(this.state.search ? this.state.search.toLowerCase() : "")
    );

    return (
      <main className="relative py-20 font-sans bg-primary">
        <div className="absolute top-5 right-3 md:right-10 ">
          <img
            src={reactIcon}
            alt="react icon"
            width={200}
            className="w-20 md:w-32"
          />
        </div>
        <div className="absolute bottom-5 left-3 md:left-10 ">
          <img
            src={reactIcon}
            alt="react icon"
            width={200}
            className="w-20 md:w-32"
          />
        </div>
        <div className="min-h-screen px-8 md:p-5 m-auto border-dashed rounded-md border-3 w-[60%]">
          <h1 className="mt-4 text-4xl text-center md:text-5xl text-secondary">
            Notes App
          </h1>
          <NotesAdd addNotes={this.onAddNotesHandler} />
          <NotesSearch onSearch={this.onSearchHandler} />
          <NotesList
            getInitialData={filterSearch}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
          />
        </div>
      </main>
    );
  }
}

export default NotesApp;
