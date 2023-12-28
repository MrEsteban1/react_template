// import React from 'react'

import { useState } from "react";

const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const handleClick = () => {
    setCounter({ counter1: counter1 + 1, counter2, counter3 });
  };

  return (
    <>
      <hr />
      <h3>Counter 1: {counter1}</h3>
      <h3>Counter 2: {counter2}</h3>
      <h3>Counter 3: {counter3}</h3>
      <button className="btn btn-success" onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
