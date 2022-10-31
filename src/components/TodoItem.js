import React from "react";
const TodoItem = (props) => {
  const handleEditing = () => {
    console.log("edit mode activated");
  };

  return (
    <li className="item">
      <div onDoubleClick={handleEditing}>
        <input
          className="checkbox"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        {props.todo.title}
      </div>
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
