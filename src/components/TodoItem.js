import React, { useState } from "react";
const TodoItem = (props) => {
  const [edit, setEdit] = useState(false);

  const handleEditing = () => {
    setEdit(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEdit(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className="checkbox"
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        {props.todo.title}
      </div>
      <input
        type="text"
        style={editMode}
        className="textInput"
        value={props.todo.title}
        onChange={(e) => {
          props.setUpdate(e.target.value, props.todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
      <button onClick={() => props.deleteTodoProps(props.todo.id)}>
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
