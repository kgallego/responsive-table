import React, {useEffect} from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

import { Grid } from 'antd';
import CellFactory from "./CellFactory";

const { useBreakpoint } = Grid;

const Table = (props) => {
  const { data, schema, handleAction } = props;

  const screens = useBreakpoint();

  useEffect(() => {console.log({screens});}, [])

  const columns = schema.map((item) => ({
    Header: item.label,
    accessor: item.accessor,
    Cell: (cell) => <CellFactory item={item} cell={cell} handleAction={handleAction} />
  }))

  return (
    <ReactTable columns={columns} data={data} />
  )
}

export default Table;
