const Item = ({ item }) => {
 return (
  <li>
   <span
    style={
     item.packed
      ? {
         textDecoration: 'line-through',
        }
      : {}
    }
   >
    {item.quantity} {item.description}
   </span>
   <button style={{ color: 'red', fontSize: '4.5rem' }}>&times;</button>
  </li>
 );
};

export default Item;
