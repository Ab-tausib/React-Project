import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import style from "./home.module.css"
import SimpleForm from './SimpleForm';

const Home = () => {
  const [todos,setTodos] = useState([]) // এখানে ভিতরে এই চিহ্নটা ([]) দেওয়ার মানে হল এখানে কোন ডাটা নেই ইউজার যেই ডাটা দিবে এটাই ডাটা..

  const handleAddTodo = (todo)=>{
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}]
    });
  
  };

  const handleRemoveTodo = (id) =>{
    setTodos((prevTodos) =>{
      const filterTodos = prevTodos.filter((todo) => todo.id !== id );
      return filterTodos;
    });
   
  
  }
  return (
    <div className={style.container}>
    <h1 style={{color:"white"}}> Todo App</h1>
    <SimpleForm onAddTodo={handleAddTodo} />
    <Todos  todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home;