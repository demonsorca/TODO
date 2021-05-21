import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos"===null)){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo)=>{
    console.log("I am onDelete",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title,des)=>{
    console.log("Added Todo",title,des)
    let sno;
    if (todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      des: des
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);   
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Header/>
      <AddTodo addTodo ={addTodo}/>
      <Todos todos ={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;
