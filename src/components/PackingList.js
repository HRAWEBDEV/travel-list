import { useState } from 'react';
import Item from './Item';

const PackingList = ({ items, onDeleteItem, onToggleItem, onClear }) => {
 const [sortBy, setSortBy] = useState('input');
 const sortedItems = [...items].sort((itemOne, itemTwo) => {
  if (sortBy === 'input') {
   return 0;
  }
  if (sortBy === 'description') {
   return itemOne.description.localeCompare(itemTwo.description);
  }
  if (sortBy === 'packed') {
   return Number(itemOne.packed) - Number(itemTwo.packed);
  }
  return 0;
 });
 return (
  <div className='list'>
   <ul>
    {sortedItems.map((item) => (
     <Item
      key={item.id}
      item={item}
      onDeleteItem={onDeleteItem}
      onToggleItem={onToggleItem}
     />
    ))}
   </ul>
   <div className='actions'>
    <select
     value={sortBy}
     onChange={(e) => {
      setSortBy(e.target.value);
     }}
    >
     <option value='input'>sort by input</option>
     <option value='description'>sort by description</option>
     <option value='packed'>sort by packed</option>
    </select>
    <button onClick={onClear}>clear</button>
   </div>
  </div>
 );
};

export default PackingList;
