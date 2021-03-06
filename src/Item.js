// import {ItemObject} from './itemObject';

function Item({itemInfo, removeItem}) {

  const hanldeClick = () => {
    removeItem(itemInfo)
  }

  return (
    <li className="item">
      {`${itemInfo.name} `}
      <button onClick={hanldeClick}>Delete</button>
    </li>
  )
}

export default Item;