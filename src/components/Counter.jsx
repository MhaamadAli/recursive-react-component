import React, { useState } from "react";
import './counter.css'
const Counter = ({ cardsList = { count: 1, children: [] }, onAddChild }) => {
  const [count, setCount] = useState(cardsList.count);
  const [children, setChildren] = useState(cardsList.children || []);

  const increment = () => {
    const newChild = { count: count + 1, children: [] };
    setCount(count + 1);
    setChildren([...children, newChild]); 
    if (onAddChild) {
      onAddChild(newChild);
    }
  };

  const decrement = () => {
    setChildren(children.filter((child) => child.count!== count));
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
