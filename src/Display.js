import Item from './Item'

function Display({items, removeItem}) {
  const renderItems = (items) => {
    return items.map((item, index) => <Item key={index} itemInfo={item} removeItem={removeItem}/> )
  }

  return(
    <>
      {items.length === 0 ? <h1>No items listed</h1> : <ul className="items"> {renderItems(items)} </ul>}
    </>
  )
}

export default Display;