import React, { useState, useEffect } from "react";

//COMPONENTS

import AddTodo from "./components/addtodo";
import TodoList from "./components/todolist";
import TodoItem from "./components/todoitem";
import Logo from "./logo/logo.png"
import Loading from "./components/loading";
  

const App = () => {


   
 
  const [todoTitle, setTodoTitle] = useState(null);
  const [todoArray, setTodoArray] = useState([]);
  const [sts,setSts]=useState("");
  const [filteredstatus,setFilteredstatus]=useState([]);
  const [loading,setLoading]=useState([true])

  
  const handleAddTodo = () => {

  if(todoTitle.length>0){
    setTodoArray([...todoArray, { title: todoTitle, status:false, id: Math.random() }])
  }else{
    alert("please write a task!");
  }
    setTodoTitle("");
  };

  



  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todoList"))) {
      setTodoArray(JSON.parse(localStorage.getItem("todoList")));
      console.log("Si existe");
    } else {
      setTodoArray(localStorage.setItem("todoList", JSON.stringify([])));
      console.log("No existe");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoArray));
  }, [todoArray]);


  const statusHandler=(e)=>{
    setSts(e.target.value)
    console.log(e.target.value)
  }
  

  const filterHandler=()=>{
    switch(sts){
      case 'complete':
        setFilteredstatus(todoArray.filter(todo => todo.status === true))
        break;
        case 'pending':
          setFilteredstatus(todoArray.filter(todo => todo.status === false))
          break;
          default:
            setFilteredstatus(todoArray);
            break;
    }
  }

  useEffect(()=>{
    filterHandler();
  },[sts,todoArray])

  const loadingstatus=()=>{
    setTimeout(()=>{
        setLoading(false);
    }, 2000);
}
  useEffect(()=>{
    
    loadingstatus();
},[])


if(loading){
  return(
      <Loading/>
  )
}else{
  return (

    <div className="h-screen bg-purp flex justify-center items-center ">
      <div className="w-11/12 bg-yellow    md:bg-yellow  md:w-3/6 md:h-5/6 text-white px-8 py-8 rounded-2xl ">
      <div className="flex md:space-x-28">
        <div>
        <h1 className="font-bold text-left text-6xl text-purp mx-8 mt-8">ToDo</h1>
        <h2 className="tracking-wider font-bold text-purp text-left text-2xl mx-9">MOJICAPP</h2></div>
        <div>
        <img  className="mt-1/4 md:ml-24 md:w-1/3" src={Logo}/></div>
        </div>
        <div >
        <AddTodo
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          handleAddTodo={handleAddTodo}
        />
        </div>
        <div className="overflow-y-auto	h-3/6">
        <TodoList>
          {/* children */}
          {todoArray?.length > 0 &&
            filteredstatus.map((task, index) => (
              <TodoItem
                title={task.title}
                status={task.status}
                setTodoArray={setTodoArray}
                index={index}
                todoArray={todoArray}
                key={index}
              />
            ))}
          {/* children */}
        </TodoList>
        
      </div>
      <div className="flex justify-center items-center mt-6">
        <button value="all" onClick={statusHandler} className="text-xs md:text-base border-2 bg-purp w-1/5 mx-0.5 rounded-l-full text-yellow font-bold hover:bg-yellow hover:text-purp">
            ALL</button>
        <button value="pending" onClick={statusHandler} className="text-xs md:text-base border-2 bg-purp w-1/5 mx-0.5  text-yellow font-bold hover:bg-yellow hover:text-purp">
            PEND</button>
        <button value="complete" onClick={statusHandler} className="text-xs md:text-base border-2 bg-purp w-1/5 mx-0.5 rounded-r-full text-yellow font-bold hover:bg-yellow hover:text-purp">
            COMP</button>
        
      </div>
      </div>
    </div>
  );
}};

export default App;
