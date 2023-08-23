const Form = () => {
 const handleSubmit = (e) => {
  e.preventDefault();
 };

 return (
  <div className='add-form'>
   <h3>what do you need for your 😍 trip?</h3>
   <select name='' id=''>
    {Array.from({ length: 20 }, (_, i) => ++i).map((item) => {
     return (
      <option key={item} value={item}>
       {item}
      </option>
     );
    })}
   </select>
   <input type='text' placeholder='item ...' />
   <button onClick={handleSubmit}>Add</button>
  </div>
 );
};

export default Form;
