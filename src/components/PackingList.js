import Item from './Item';
const PackingList = ({ items }) => {
 return (
  <div className='list'>
   <ul>
    {items.map((item) => (
     <Item key={item.id} item={item} />
    ))}
   </ul>
  </div>
 );
};

export default PackingList;
