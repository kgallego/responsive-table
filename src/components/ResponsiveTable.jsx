import React, {useState} from "react";
import Table from "./Table";
import {Grid} from 'antd';
import List from "./List";
import Modal from "./Modal";

const { useBreakpoint } = Grid;

const ResponsiveTable = ({ title, data, schema, handleAction }) => {
  const [visible, setVisible] = useState(false);
  const screens = useBreakpoint();

  const handleShowInfo = () => {
    setVisible(true);
  }

  // todo: transform data instead;
  if (!screens.sm) {
    const visibleCols = schema.filter(item => !item.input);
    const responsiveSchema = [
      {label: '', accessor: 'showInfo', input: 'showInfoButton'},
      ...visibleCols
    ]

    console.log({visibleCols});
    return (
      <>
        <Modal
          title={title}
          visible={visible}
          close={() => setVisible(false)}
        >
          <List // form?
            data={data[0]} // todo: wag hardcoded boi
            schema={schema}
            handleAction={handleAction}
          />
        </Modal>
        <Table
          data={data}
          schema={responsiveSchema}
          handleAction={handleAction}
          handleShowInfo={handleShowInfo}
        />
      </>
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
