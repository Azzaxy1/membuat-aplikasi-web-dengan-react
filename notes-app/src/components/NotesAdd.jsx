/* eslint-disable react/prop-types */
import React from "react";

export class NotesAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
      maxTitleLength: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onNotesChangeHandler = this.onNotesChangeHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onCheckedChangeHandler = this.onCheckedChangeHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    const inputTitle = e.target.value;
    const remainingChars = this.state.maxTitleLength - inputTitle.length;
    if (remainingChars >= 0) {
      this.setState({
        title: inputTitle,
        remainingChars: remainingChars,
      });
    }
  }

  onNotesChangeHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onCheckedChangeHandler(e) {
    this.setState(() => {
      return {
        archived: e.target.checked,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler} className="flex flex-col">
        <h2 className="text-3xl">Create Notes</h2>
        <h3 className="py-2 pr-3 text-end">
          Limit caracter : {this.state.remainingChars}
        </h3>
        <input
          className="px-2 py-3 mb-3 text-base "
          type="text"
          placeholder="Masukan judul disini..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          required
        />
        <textarea
          className="h-20 px-2 mb-3 text-base"
          type="text"
          placeholder="Masukan catatanmu disini..."
          value={this.state.body}
          onChange={this.onNotesChangeHandler}
          required
        />
        <div className="flex items-center gap-2 pl-2 mb-2">
          <label>Archive</label>
          <input
            type="checkbox"
            checked={this.state.archived}
            onChange={this.onCheckedChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="py-2 text-lg bg-[#1a80af] hover:bg-[#156083] text-white border-none rounded-lg cursor-pointer"
        >
          Add Note
        </button>
      </form>
    );
  }
}

export default NotesAdd;
