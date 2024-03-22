import React, { useState } from "react"



const CounterCard = ({ count, onIncrement, onDecrement}) => {
    return (
      <div>
      -
        {count}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  };
  
export default CounterCard


