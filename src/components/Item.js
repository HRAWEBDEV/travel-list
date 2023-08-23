const Item = ({ item, onDeleteItem, onToggleItem }) => {
 return (
  <li>
   <input
    type='checkbox'
    value={item.packed}
    onChange={(e) => {
     onToggleItem(item.id, e.target.checked);
    }}
   />
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
   <button
    onClick={() => onDeleteItem(item.id)}
    style={{ color: 'red', fontSize: '4.5rem' }}
   >
    &times;
   </button>
  </li>
 );
};

export default Item;
