import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

import CellFactory from "./CellFactory";

const Table = ({data, schema, handleAction}) => {
  const columns = schema.map((item) => ({
    Header: item.label,
    accessor: item.accessor,
    Cell: (cell) => <CellFactory item={item} cell={cell} handleAction={handleAction}/>
  }))

  return (
    <ReactTable columns={columns} data={data}/>
  )
}

export default Table;
