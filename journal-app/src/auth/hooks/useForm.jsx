import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event) => {
    const { target } = event;
    console.log("target:", target.value);
    setFormState({ ...formState, [target.name]: target.value });
  };

  const resetValues = () => {
    setFormState(initialForm);
  };

  return { ...formState, onInputChange, resetValues };
};
