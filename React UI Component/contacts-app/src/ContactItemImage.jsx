// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const ContactItemImage = ({ imageUrl, tag }) => {
  return (
    <div>
      <img src={imageUrl} alt={tag} />
    </div>
  );
};

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string,
  tag: PropTypes.string,
};

export default ContactItemImage;
