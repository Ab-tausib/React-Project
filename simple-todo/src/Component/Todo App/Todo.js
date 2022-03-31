import React from 'react'
import style from "./Todo.module.css"

const Todo = (props) => {
  
    const {title, desc, Roll} = props.todo;
    const { id } = props;

    const handleClick = (id)=>{
        props.onRemoveTodo(id)
    }
    return (
   <article className={style.todo}>
        <div> 
        <h3>{title}</h3>
        <p>{desc}</p>
        <p>{Roll}</p>
            <button className={style.btn} onClick={()=>{
                handleClick(id)
            }}>
                <i  className='fa fa-trash fa-2x'></i>
            </button>
        
     
    </div>
   </article>
  )
}

export default Todo;