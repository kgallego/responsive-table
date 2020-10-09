import React, {useEffect, useRef, useState} from "react";
import Table from "./Table";
import {Grid} from 'antd';
import List from "./List";
import Modal from "./Modal";

const { useBreakpoint } = Grid;

const ResponsiveTable = ({ title, data, schema, handleAction }) => {
  const idRef = useRef(data[0].id);
  const [currentData, setCurrentData] = useState(data[idRef.current]);
  const [visible, setVisible] = useState(false);
  const screens = useBreakpoint();


  useEffect(() => {
    setCurrentData(data.find(item => item.id === idRef.current))
  }, [data]) // not sure why this useeffect was necessary, when data comes in it should rerender; is it because of data being an array of objects?

  const handleShowInfo = (_id) => {
    setCurrentData(data.find(item => item.id === _id));
    idRef.current = _id;
    setVisible(true);
  }

  if (!screens.sm) {
    const visibleCols = schema.filter(item => !item.input);
    const responsiveSchema = [
      {label: '', accessor: 'showInfo', input: 'showInfoButton'},
      ...visibleCols
    ]

    return (
      <>
        <Modal
          title={title}
          visible={visible}
          close={() => setVisible(false)}
        >
          <List // form?
            data={currentData}
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
