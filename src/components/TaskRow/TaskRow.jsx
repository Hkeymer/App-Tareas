import React from 'react'
import styles from "./styles.module.css";


const TaskRow = ({item,updateTask}) => {
  return (
            <div  className={styles.item}>
            {item.name}
                <input
                type={'checkbox'} 
                checked={item.done}
                onChange={(e)=>updateTask(item)}
                      />
            </div>
  )
}

export default TaskRow