import React from "react";
import {Button} from "antd";

const CellFactory = ({item, cell, handleAction, handleShowInfo}) => {
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
    case 'showInfoButton':
      return <Button onClick={() => handleShowInfo(cell.original.id, accessor)}>show info</Button>;
    default:
      return <span>{cell.row[accessor]}</span>
  }
};

export default CellFactory;
