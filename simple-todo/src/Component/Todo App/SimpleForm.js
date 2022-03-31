import React, {useState} from 'react'
import style from "./SimpleForm.module.css"

const SimpleForm = (props) => {

const [Todo, SetTodo] = useState({title: "", desc:"", Roll:""} );
const {title, desc,Roll} = Todo;
const hendleChange = (event) =>{

     const name = event.target.name;
     SetTodo((oldTodo) =>{
         return {...oldTodo, [name]: event.target.value}
     })

}


const hendleSubmit = (event) =>{
    event.preventDefault();
    props.onAddTodo(Todo)
    SetTodo({title:"", desc:"",Roll:""})

}

  return (
    <>
    <form className={style.form} onSubmit={hendleSubmit}>
        <div className={style["form-field"]}>
            <label htmlFor='title'> Name: </label>
            <input 
             type="text"
              id='title' 
              name='title'
              value={title}
              onChange={hendleChange}
              required/>
        </div>

        <div className={style["form-field"]}>
            <label htmlFor='title'> Age: </label>
            <input 
             type="number"
              id='desc' 
              name='desc'
              value={desc}
              onChange={hendleChange}
              required/>
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='title'> Roll: </label>
            <input 
             type="number"
              id='Roll' 
              name='Roll'
              value={Roll}
              onChange={hendleChange}
              required/>
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