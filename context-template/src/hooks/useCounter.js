//LOS HOOKS SE USAN CON LA PLABRA "use" como estandar!
import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (valor = 1) => {
    setCounter(counter + valor);
  };

  const decrement = (valor = 1) => {
    if (counter === 0) return;
    setCounter(counter - valor);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, setCounter, increment, decrement, reset };
};

export default useCounter;
