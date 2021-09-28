import React from "react";

const AddTodo = ({ todoTitle, setTodoTitle, handleAddTodo }) => {
  return (
    <div className="flex w-full mt-6 rounded-full mt-8">
      <input
        type="text"
        className="justify-center items-center w-3/4 p-2 text-black rounded-full font-bold text-purp border-purp border-2"
        onChange={e => setTodoTitle(e.target.value)}
        value={todoTitle}
      />
      <br></br>
      <button className="justify-center items-center bg-purp w-1/4 rounded-full font-bold text-2l text-yellow tracking-widest font-mono" onClick={handleAddTodo}>
      +
      </button>
    </div>
  );
};

export default AddTodo;