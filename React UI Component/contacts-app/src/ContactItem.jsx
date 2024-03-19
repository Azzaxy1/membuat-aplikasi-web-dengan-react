// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";

const ContactItem = ({ name, tag, imageUrl }) => {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} tag={tag} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default ContactItem;
