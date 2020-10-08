import React, {useEffect, useState} from "react";
import Table from "../components/Table";
import fixture from "../fixtures/userSettings.json"

const DemoPage = () => {
  const [data, setData] = useState(fixture);

  useEffect(() => console.log('demo page rendered!'), [])

  const update = (id, key, value) => {
    console.log('make api call with: ', id, key, value);
    setData(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            [key]: value
          }
        }
        return item
      })
    })
  }

  const schema = [
    { label: 'Username', accessor: 'username'},
    { label: 'Enabled', accessor: 'enabled', input: 'checkbox'},
  ]

  const handleAction = (id, key, value) => {
    // fake api action:
    update(id, key, value);
  }
  return (
    <div>
        <h1>Demo Page!</h1>
        <Table
          data={data}
          schema={schema}
          handleAction={handleAction}
        />
    </div>
  )
};

export default DemoPage;
