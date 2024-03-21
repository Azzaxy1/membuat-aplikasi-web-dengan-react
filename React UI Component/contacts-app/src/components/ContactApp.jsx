// eslint-disable-next-line no-unused-vars
import React from "react";

import { getData } from "../utils/data";
import ContactList from "./ContactList";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      contacts: getData(),
    };

    // Binding event handler agar nilai this selalu bernilai ConctactApp dimanapun fungsi dipanggil
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);

    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          // pakai spread operator agar mempertahankan data sebelumnya didalam arr contacts
          ...prevState.contacts,
          {
            id: +new Date(), // manual
            name, // berdasarkan state
            tag, // berdasarkan state
            imageUrl: "/images/default.jpg", // manual
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h2>Daftar Kontak</h2>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactApp;
