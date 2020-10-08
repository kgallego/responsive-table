import React from "react";
import Table from "./Table";

const ResponsiveTable = ({ data, schema, handleAction }) => {
  return (
    <>
      <Table
        data={data}
        schema={schema}
        handleAction={handleAction}
      />
    </>
  )
};

export default ResponsiveTable;
