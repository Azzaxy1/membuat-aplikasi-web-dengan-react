/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
