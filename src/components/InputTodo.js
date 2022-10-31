import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={titleChangeHandler}
        name="title"
      />
      <button>Submit</button>
    </form>
  );
};

export default InputTodo;
