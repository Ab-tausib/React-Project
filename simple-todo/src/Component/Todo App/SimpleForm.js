import React, {useState} from 'react'
import style from "./SimpleForm.module.css"

const SimpleForm = (props) => {

const [Todo, SetTodo] = useState({title: "", desc:""});
const {title, desc} = Todo;
const hendleChange = (event) =>{

     const name = event.target.name;
     SetTodo((oldTodo) =>{
         return {...oldTodo, [name]: event.target.value}
     })

}


const hendleSubmit = (event) =>{
    event.preventDefault();
    props.onAddTodo(Todo)
    SetTodo({title:"", desc:""})

}

  return (
    <>
    <form className={style.form} onSubmit={hendleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'> Title: </label>
            <input 
             type="text"
              id='title' 
              name='title'
              value={title}
              onChange={hendleChange}/>
        </div>

        <div className={style["form-field"]}>
            <label htmlFor='title'> Descreption: </label>
            <textarea 
             type="text"
              id='desc' 
              name='desc'
              value={desc}
              onChange={hendleChange}/>
        </div>
        <div>
            <button type='submit'>
                Add Todo
            </button>
        </div>
    </form>
    </>
  )
}

export default SimpleForm;