// import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, OnDeleteTodo, onTodoDone }) => {
  return (
    <ul className="row list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={OnDeleteTodo}
          onDoneTodo={onTodoDone}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.any.isRequired,
  OnDeleteTodo: PropTypes.any.isRequired,
  onTodoDone: PropTypes.any.isRequired,
};

export default TodoList;
