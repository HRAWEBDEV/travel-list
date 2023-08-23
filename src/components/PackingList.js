import Item from './Item';
const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
 return (
  <div className='list'>
   <ul>
    {items.map((item) => (
     <Item
      key={item.id}
      item={item}
      onDeleteItem={onDeleteItem}
      onToggleItem={onToggleItem}
     />
    ))}
   </ul>
  </div>
 );
};

export default PackingList;
