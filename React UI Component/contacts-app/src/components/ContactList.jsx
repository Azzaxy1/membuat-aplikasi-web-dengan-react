// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
