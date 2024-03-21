// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";

const ContactItem = ({ name, tag, imageUrl, id, onDelete }) => {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} tag={tag} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
};

export default ContactItem;
