import React from "react";
import CellFactory from "./CellFactory";

const List = ({ data, schema }) => {

  const formItem = (schemaItem, accessorValue) => {
    return (
      <div key={schemaItem.label} style={{ marginBottom: 20, display: 'flex', flexDirection: 'column'}}>
        <b><span style={{ paddingBottom: 6 }}>{schemaItem.label}</span></b>
        <CellFactory
          schemaItem={schemaItem}
          value={accessorValue}
          id={data.id} // not necessary
          handleAction={() => {}}
        />
      </div>
    )
  }

  const currentSchemaItem = (accessor) => {
    return schema.find(item => item.accessor === accessor ? item : undefined);
  }

  const renderList = () => {
    return Object.entries(data).map(value => {
      const accessor = value[0];
      const accessorValue = value[1];
      const schemaItem = currentSchemaItem(accessor); // think of better term

      // only render data that's in the schema
      if (!schemaItem) {
        return null;
      }

      return formItem(schemaItem, accessorValue)
    });
  }

  return (
    <div>
      {renderList()}
    </div>
  )
};

export default List;
