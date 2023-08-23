import Item from './Item';
const PackingList = ({ items, onDeleteItem }) => {
 return (
  <div className='list'>
   <ul>
    {items.map((item) => (
     <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
    ))}
   </ul>
  </div>
 );
};

export default PackingList;
