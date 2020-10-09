import React, {useEffect, useState} from "react";
import ResponsiveTable from "../components/ResponsiveTable";
import fixture from "../fixtures/userSettings.json"

const DemoPage = () => {
  const [data, setData] = useState(fixture);

  useEffect(() => console.log('demo page rendered!'), [])

  // fake api action:
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

  const handleActionFactory = (id, accessor, value) => {
    update(id, accessor, value);
  }

  return (
    <div>
      <ResponsiveTable
        title='User Settings'
        data={data}
        schema={schema}
        handleAction={handleActionFactory}
      />
    </div>
  )
};

export default DemoPage;
