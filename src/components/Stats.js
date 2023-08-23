const Stats = ({ items }) => {
 if (!items.length)
  return (
   <footer className='stats'>
    <p className='footer'>
     <em>lets start adding items to your packing list</em>
    </p>
   </footer>
  );

 const packedNum = items.filter((item) => item.packed).length;
 const percentage = Math.round((packedNum / items.length) * 100);
 return (
  <footer className='stats'>
   {percentage === 100 ? (
    <em>everything is ready, let's go</em>
   ) : (
    <em>
     you have {items.length} items on your list, and you already packed
     {packedNum} ({percentage}%)
    </em>
   )}
  </footer>
 );
};

export default Stats;
