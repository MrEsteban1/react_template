import { useEffect } from "react";
import { todoReducer } from "../../helpers/todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import useTodo from "../../hooks/useTodo";

const initialState = [
  { id: new Date().getTime(), description: "Recoger la basura", done: false },
  { id: new Date().getTime() + 1, description: "Limpiar el piso", done: false },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const { toDos, handleDoneTodo, onNewTodo, handleRemoveTodo } = useTodo(
    initialState,
    todoReducer,
    init
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
    console.log(toDos);
  }, [toDos]);

  return (
    <>
      <hr />
      <h2>Todo App</h2>
      <hr />
      <TodoAdd onNewTodo={onNewTodo} />
      <div className="row m-2">
        <h3>ToDo Counter: 1</h3>
        <TodoList
          todos={toDos}
          OnDeleteTodo={handleRemoveTodo}
          onTodoDone={handleDoneTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
