import React from "react";
import {Button} from "antd";

const CellFactory = ({schemaItem, value, id, handleAction, handleShowInfo}) => {
  const {accessor} = schemaItem;
  switch (schemaItem.input) {
    case 'checkbox':
      return <input
        type="checkbox"
        value={value}
        checked={value}
        onChange={(event) => {
          handleAction(id, accessor, event.target.checked);
        }}/>;
    case 'showInfoButton':
      return <Button onClick={() => handleShowInfo(id, accessor)}>show info</Button>;
    default:
      return <span>{value}</span>
  }
};

export default CellFactory;
