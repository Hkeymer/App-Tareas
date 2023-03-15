import React from 'react';
import { useState } from 'react';
import styles from "./styles.module.css";


const CreateTask = ({craetNewTask}) => {

    const [task, setTask] = useState('')

    const handleSubmit = (e)=> {
      e.preventDefault();
      if (task) {
        craetNewTask(task)
        setTask('')
         }
       }

  return (
    <div className={styles.conten}>
      <form 
      className={styles.form}
      onSubmit={handleSubmit}
        >
       <input
         type={'text'}
         placeholder='Enter a new task'
         value={task}
         onChange={(e)=>{setTask(e.target.value)}}
       />
       <button>Sabe</button>
     </form>
    </div>
  )
}

export default CreateTask