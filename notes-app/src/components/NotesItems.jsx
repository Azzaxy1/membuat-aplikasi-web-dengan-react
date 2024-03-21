/* eslint-disable react/prop-types */
// import React from "react";

import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

const NotesItems = ({ id, title, body, createdAt, onDelete, onArchive }) => {
  return (
    <div className="flex flex-col gap-6 text-white">
      <article className="px-5 py-4 mb-3 bg-seconday rounded-e-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className="font-semibold">{title}</h1>
        <p className="pt-1 pb-3 font-thin">
          {new Date(createdAt).toLocaleString()}
        </p>
        <p className="font-medium">{body}</p>
        <div className="flex justify-end gap-2 pt-4 ">
          <ArchiveButton id={id} onArchive={onArchive} />
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
      </article>
    </div>
  );
};

export default NotesItems;
