import { useState } from 'react';

const Form = ({ onAddItem }) => {
 const [quantity, setQuantity] = useState(1);
 const [description, setDescription] = useState('');

 const handleSubmit = (e) => {
  e.preventDefault();
  const newItem = { id: Date.now(), description, quantity, packed: false };
  onAddItem(newItem);
 };

 return (
  <div className='add-form'>
   <h3>what do you need for your 😍 trip?</h3>
   <select
    value={quantity}
    onChange={(e) => {
     setQuantity(e.target.value);
    }}
    name=''
    id=''
   >
    {Array.from({ length: 20 }, (_, i) => ++i).map((item) => {
     return (
      <option key={item} value={item}>
       {item}
      </option>
     );
    })}
   </select>
   <input
    value={description}
    onChange={(e) => {
     setDescription(e.target.value);
    }}
    type='text'
    placeholder='item ...'
   />
   <button onClick={handleSubmit}>Add</button>
  </div>
 );
};

export default Form;
