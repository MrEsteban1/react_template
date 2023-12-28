// import React from "react";
import useCounter from "../hooks/useCounter";

const CounterWithCumtomHook = () => {
  const counter = useCounter();

  return (
    <>
      <h3>Counter with Hook: {counter.counter} </h3>
      <hr />
      <buttton
        className="btn btn-danger m-2"
        onClick={() => counter.decrement(2)}
      >
        -1
      </buttton>
      <buttton className="btn btn-primary  m-2" onClick={counter.reset}>
        reset
      </buttton>
      <buttton
        className="btn btn-success  m-2"
        onClick={() => counter.increment(2)}
      >
        +1
      </buttton>
    </>
  );
};

export default CounterWithCumtomHook;
