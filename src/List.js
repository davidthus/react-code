import React, { useEffect, useState} from 'react'

function List({ getItems }) {
  const [ items, setItems ] = useState([]);


  // since everytime the App function re-renders, the getItems function gets redeclared and the reference value changes so it triggers the useEffect leading to unwanted side effects such as this console.log
  useEffect(() => {
    setItems(getItems());
    console.log('updating items')
  }, [getItems])

  return items.map(item => <div key={item}>{item}</div>)
}

export default List;