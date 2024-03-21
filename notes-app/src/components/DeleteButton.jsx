/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Trash2 } from "lucide-react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <>
      <Trash2 className="cursor-pointer" onClick={() => onDelete(id)} />
    </>
  );
};

export default DeleteButton;
