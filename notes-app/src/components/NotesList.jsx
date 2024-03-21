/* eslint-disable react/prop-types */
// import React from "react";
import NotesItems from "./NotesItems";

const NotesList = ({ getInitialData, onDelete, onArchive }) => {
  return (
    <div className="flex flex-col gap-4 pt-10 md:flex-row">
      <div className="px-4 my-3 w-full mr-5 md:w-[50%] border-t-2 rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-center">Active</h1>
        {getInitialData.length ? (
          getInitialData.map((note) => {
            return <NotesItems key={note.id} onDelete={onDelete} {...note} />;
          })
        ) : (
          <p className="text-center"> Tidak ada catatan</p>
        )}
      </div>
      <div className="px-4 my-3 w-full mr-5 md:w-[50%] border-t-2 rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-center">Archive</h1>
        {/* Data akan berpindah kesini bila user menekan tombol */}
      </div>
    </div>
  );
};

export default NotesList;
