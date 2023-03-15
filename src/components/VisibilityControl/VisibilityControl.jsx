import React from 'react';
import styles from "./styles.module.css";


const VisibilityControl = ({showCoplete,setShowCoplete,clearTask}) => {
  return (
    <div>
        <div className={styles.conten}> 
            <div className={styles.switch}>
            <input 
            className={styles.ipt_switch}  
            type={'checkbox'}
            onChange={()=>setShowCoplete(!showCoplete)}
            checked={showCoplete}
            id='check'
             />
             <label 
             htmlFor='check'
             className={styles.lbl_switch}
              ></label>
             </div>
        <label className={styles.title}  >Show Task Done</label> <button onClick={clearTask}>Clear Tasks</button>
        </div>
    </div>
  )
}

export default VisibilityControl