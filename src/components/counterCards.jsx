import React, { useState } from "react";
import CounterCard from "./counterCard.jsx";
import "./counter.css";
const CounterCards = () => {
  const [count, setCount] = useState(1);
  const cardsList = {
    id: 1,
    count: 1,
    subCards: [
        {
            id: 2,
            count: 1,
            subCards: [],
        },
        {
            id: 3,
            count: 2,
            subCards: [],
        }
    ]
  };

  const handleIncrement = () => {};

  const handleDecrement = () => {};
  return (
      <div>
        <CounterCard
          count={count}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
  );
};
export default CounterCards;
