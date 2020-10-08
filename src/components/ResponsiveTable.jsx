import React, {useEffect} from "react";
import Table from "./Table";
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const ResponsiveTable = ({ data, schema, handleAction }) => {
  const screens = useBreakpoint();
  useEffect(() => {console.log({screens})}, [screens])

  if (!screens.md) {
    return (
      <div>this is a form</div>
    )
  }

  return (
    <Table
      data={data}
      schema={schema}
      handleAction={handleAction}
    />
  )
};

export default ResponsiveTable;
