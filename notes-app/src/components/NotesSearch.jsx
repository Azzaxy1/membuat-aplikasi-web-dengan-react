/* eslint-disable react/prop-types */
import React from "react";

export class NotesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div>
        <form className="m-auto mt-3 ">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-3 "
            onChange={this.onSearchChangeEventHandler}
          />
        </form>
      </div>
    );
  }
}

export default NotesSearch;
