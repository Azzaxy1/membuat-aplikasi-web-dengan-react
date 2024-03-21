import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi state
    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    // Binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onEmailChangeEventHandler(e) {
    this.setState(() => {
      return {
        email: e.target.value,
      };
    });
  }

  onGenderChangeEventHandler(e) {
    this.setState((prevState) => {
      return {
        gender: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    // Menghentikan aksi default dari tombol submit
    e.preventDefault();

    const message = `Name: ${this.state.name} Email: ${this.state.email} Gender ${this.state.gender}`;

    alert(message);
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name : </label>
          {/* memberi nilai state melaui props value  */}
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <br />
          <label htmlFor="email">Email : </label>
          {/* memberi nilai state melaui props value  */}
          <input
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
          />
          <br />
          <label htmlFor="gender">Gender : </label>
          {/* memberi nilai state melaui props value  */}
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeEventHandler}
          >
            <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);
