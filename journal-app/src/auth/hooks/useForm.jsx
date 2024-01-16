import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValitation] = useState({});

  useEffect(() => {
    console.log(formValidation);
    createValidators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  const isFormValid = useMemo(() => {
    console.log(formValidation);
    const incorrectsValues = Object.keys(formValidation).find(
      (value) => formValidation[value] !== null
    );
    console.log(incorrectsValues);

    return incorrectsValues === undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValidation]);

  const onInputChange = (event) => {
    const { target } = event;
    // console.log(target.name, target.value);
    setFormState({ ...formState, [target.name]: target.value });
  };

  const resetValues = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = "This input is not correct."] =
        formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValitation(formCheckedValues);
  };

  return {
    ...formState,
    onInputChange,
    resetValues,
    ...formValidation,
    isFormValid,
  };
};
