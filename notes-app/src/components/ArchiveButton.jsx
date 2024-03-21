/* eslint-disable no-unused-vars */
import React from "react";
import { Archive } from "lucide-react";

const ArchiveButton = ({ id, onArchive }) => {
  return (
    <>
      <Archive className="cursor-pointer " onClick={() => onArchive(id)} />
    </>
  );
};

export default ArchiveButton;
