import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
    }
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={titleChangeHandler}
        name="title"
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
