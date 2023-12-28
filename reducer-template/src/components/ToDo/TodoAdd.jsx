import useForm from "../../hooks/useForm";
import PropTypes from "prop-types";

const TodoAdd = ({ onNewTodo }) => {
  const { task, onInputChange, resetValues } = useForm({ task: "" });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (task.length <= 1) {
      return;
    } else {
      resetValues();

      const newToDo = {
        id: new Date().getTime(),
        description: task,
        done: false,
      };

      onNewTodo(newToDo);
    }
  };

  return (
    <div className="col-5 ">
      <h4>Add Task:</h4>

      <form action="" onSubmit={onFormSubmit} className="my-4">
        <input
          type="text"
          name="task"
          placeholder="Add a task to do..."
          className="form-control "
          value={task}
          onChange={onInputChange}
        />
        <button type="submit" className=" my-2 btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.any.isRequired,
};

export default TodoAdd;
