// eslint-disable-next-line no-unused-vars
import React from "react";

import { getData } from "../utils/data";
import ContactList from "./ContactList";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      contacts: getData(),
    };

    // Binding event handler agar nilai this selalu bernilai ConctactApp dimanapun fungsi dipanggil
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);

    this.setState({ contacts });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
