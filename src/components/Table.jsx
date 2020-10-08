import React, {useEffect} from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const Table = (props) => {
  const { data, schema, handleAction } = props;

  const screens = useBreakpoint();

  useEffect(() => {console.log({screens});}, [])

  const generateCell = (cell, item) => {
    const {accessor} = item;
    if (item.input === 'checkbox') {
      return <input
        type="checkbox"
        value={cell.row[accessor]}
        checked={cell.row[accessor]}
        onChange={(event) => {
          handleAction(cell.original.id, accessor, event.target.checked);
        }}/>
    }

    return <span>{cell.row[accessor]}</span>
  };

  const columns = schema.map((item) => ({
    Header: item.label,
    accessor: item.accessor,
    Cell: (cell) => generateCell(cell, item)
  }))

  return (
    <ReactTable columns={columns} data={data} />
  )
}

export default Table;
