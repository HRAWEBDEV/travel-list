import Item from './Item';
const PackingList = ({ list }) => {
 return (
  <div className='list'>
   <ul>
    {list.map((item) => (
     <Item key={item.id} item={item} />
    ))}
   </ul>
  </div>
 );
};

export default PackingList;
