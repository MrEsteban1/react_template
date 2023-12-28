// import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }) => {
  return (
    <li
      key={todo.id}
      className="col-4 list-group-item d-flex justify-content-between"
    >
      <span
        className={`alig-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onDoneTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.any.isRequired,
  onDeleteTodo: PropTypes.any.isRequired,
  onDoneTodo: PropTypes.any.isRequired,
};

export default TodoItem;
