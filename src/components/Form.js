import React from "react";

const Form = ({ setInputText, tasks, setTasks, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitToDoHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        onClick={inputTextHandler}
        type="text"
        className="task-input"
        placeholder="Add todo"
      />

      <button
        onClick={submitToDoHandler}
        className="todo-button"
        type="submit"
      >+</button>
      <div className="select"></div>
    </form>
  );
};
export default Form;
