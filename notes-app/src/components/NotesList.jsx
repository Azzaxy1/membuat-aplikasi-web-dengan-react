// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import NotesItems from "./NotesItems";

const NotesList = ({ getInitialData, onDelete, onArchive }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 md:items-start md:gap-2 md:flex-row">
      <div className="px-4 my-3 w-full md:w-[50%] rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-center">Active</h1>
        {getInitialData.length ? (
          getInitialData.map((note) => {
            return <NotesItems key={note.id} onDelete={onDelete} {...note} />;
          })
        ) : (
          <p className="text-center"> Tidak ada catatan</p>
        )}
      </div>
      <div className="px-4 my-3 w-full md:w-[50%] rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-center">Archive</h1>
        {/* Data akan berpindah kesini bila user menekan tombol */}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  getInitialData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
      ]).isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesList;
