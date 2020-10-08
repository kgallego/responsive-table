import React, {useEffect, useState} from "react";
import ResponsiveTable from "../components/ResponsiveTable";
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
    {label: 'Username', accessor: 'username'},
    {label: 'Email', accessor: 'email'},
    {label: 'Enabled', accessor: 'enabled', input: 'checkbox'},
    {label: 'Enabled2', accessor: 'enabled2', input: 'checkbox'},
    {label: 'Enabled3', accessor: 'enabled3', input: 'checkbox'},
  ]

  const handleAction = (id, key, value) => {
    // fake api action:
    update(id, key, value);
  }
  return (
    <div>
      <h1>Demo Page!</h1>
      <ResponsiveTable
        data={data}
        schema={schema}
        handleAction={handleAction}
      />
    </div>
  )
};

export default DemoPage;
