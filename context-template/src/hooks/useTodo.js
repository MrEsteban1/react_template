import { useReducer } from "react";

const useTodo = (initialState, todoReducer, init) => {
  const [toDos, dispatch] = useReducer(todoReducer, initialState, init);

  const onNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };

    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const handleDoneTodo = (id) => {
    console.log("Llego");
    const action = {
      type: "[TODO] Done Todo",
      payload: id,
    };

    dispatch(action);
  };

  return { handleDoneTodo, handleRemoveTodo, onNewTodo, toDos };
};

export default useTodo;
