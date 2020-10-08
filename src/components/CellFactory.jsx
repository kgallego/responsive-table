import React from "react";

const CellFactory = ({item, cell, handleAction}) => {
  const {accessor} = item;
  switch (item.input) {
    case 'checkbox':
      return <input
        type="checkbox"
        value={cell.row[accessor]}
        checked={cell.row[accessor]}
        onChange={(event) => {
          handleAction(cell.original.id, accessor, event.target.checked);
        }}/>;
    default:
      return <span>{cell.row[accessor]}</span>
  }
};

export default CellFactory;
