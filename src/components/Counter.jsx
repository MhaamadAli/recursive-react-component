import React, { useState } from "react";
import './counter.css'
const Counter = ({ cardsList = { count: 1, children: [] }, onAddChild }) => {
  const [count, setCount] = useState(cardsList.count);
  const [children, setChildren] = useState(cardsList.children || []);

  const increment = () => {
    setCount(count + 1);
    setChildren([...children, { count: count + 1, children: [] }]); 
    if (onAddChild) {
      onAddChild({ count: count + 1, children: [] });
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ paddingLeft: 10 }}>
    <span>- {count}</span>
      <button onClick={increment}>+</button>
      
      <button onClick={decrement}>-</button>
      {count > 1 && (
        <ul>
          {children.map((child) => (
            <li key={child.count}>
              <Counter cardsList={child} onAddChild={onAddChild} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Counter;
