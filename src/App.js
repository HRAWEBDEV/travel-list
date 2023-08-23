import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Stats from './components/Stats';
import PackingList from './components/PackingList';

const App = () => {
 const [items, setItems] = useState([]);

 const handleAddItem = (newItem) => {
  setItems((items) => [...items, newItem]);
 };
 const handleDeleteItem = (id) => {
  setItems((items) => items.filter((item) => item.id !== id));
 };

 return (
  <div className='app'>
   <Logo />
   <Form onAddItem={handleAddItem} />
   <PackingList items={items} onDeleteItem={handleDeleteItem} />
   <Stats />
  </div>
 );
};

export default App;
