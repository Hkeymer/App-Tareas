import React from 'react'
import TaskRow from '../TaskRow/TaskRow'
import styles from "./styles.module.css";


const TaskTable = ({ taskItems, updateTask, showCoplete }) => {
 
      console.log(taskItems)

    const taskTableRow = (doneValue)=> {
          return(
                taskItems
                .filter(item=>item.done===doneValue)
                .map(
                (item,index) =>(
                 <li key={index}><TaskRow 
                 item={item} 
                 updateTask={updateTask} 
                /></li> )
               )
            )
         }


  return (
    <div className={styles.TaskTable}>
         <div>
              <h3>
                Task
              </h3>
           <ul>
            {
             taskTableRow(showCoplete)
            }
           </ul>
        </div>
    </div>
  )
}

export default TaskTable