import React from "react";


const TodoItem = ({ title, status, setTodoArray, index, todoArray }) => {
  const completeOrDeleteTodo = () => {
    if (status) {
      const deletedTodos = [...todoArray];
      deletedTodos.splice(index, 1);
      setTodoArray(deletedTodos);
    } else {
      const updatedTodos = [...todoArray]; //<----- Array original
      updatedTodos[index].status = true; //<----- El "mismo" array, pero con un valor actualizado
      setTodoArray(updatedTodos);
      
    }
    console.log(status)
  };
  

  return (
    <div className="text-purp 
                    text-9x1 
                    font-bold 
                    flex 
                    justify-between 
                    item-center 
                    w-full 
                    mt-5 border-b-2	border-purp py-3">
      <p className={`${status ? "line-through" : ""}`}>{title}</p>
      <button
        className= {`${status ? "bg-red text-yellow" : "bg-purp text-yellow"} py-2 px-5 font-bold`}
        onClick={completeOrDeleteTodo}
      >
        {status ? "delete" : "complete"}
      </button>
    </div>
  );
};

export default TodoItem;