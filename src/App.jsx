import React, {useState} from 'react';
import './App.css';

import Counter from './components/Counter.jsx'


const App = ()=> {
  const [allCards, setAllCards] = useState({ count: 1, children: [] });

  const handleAddChild = (newChild) => {
    setAllCards({ ...allCards, children: [...allCards.children, newChild] });
  }; 

  return (
    <div>
      <Counter cardsList={allCards} onAddChild={handleAddChild} />
    </div>
  );
}


export default App;
