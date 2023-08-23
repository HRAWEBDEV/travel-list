import { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import Stats from './components/Stats';
import PackingList from './components/PackingList';

const initialItems = [
 { id: 1, description: 'Passports', quantity: 2, packed: true },
 { id: 2, description: 'Socks', quantity: 12, packed: false },
];

const App = () => {
 const [packList, setPackList] = useState(initialItems);

 return (
  <div className='app'>
   <Logo />
   <Form />
   <PackingList list={packList} />
   <Stats />
  </div>
 );
};

export default App;
