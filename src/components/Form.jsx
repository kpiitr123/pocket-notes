import React from 'react'
import styles from "./Form.module.css"
import { defaultcolor } from '../data/colors'


export default function Form({
    name,
    setName,
    color,
    setColor,
    submitHandler,
}) {
  return (
   <>
   <div className={styles.background}></div>
   <div className={styles.popscreen}>
    <h3>Create New Group</h3>
    <div className={styles.groupname}>
   <label >Group Name</label>
    <input
   type='text'
   placeholder='Enter group name'
   value={name}
   onChange={(e)=>setName(e.target.value)}
    />
    </div>
    
<div className={styles.colorcontainer}>
    <label>Choose Color</label>
    {defaultcolor.map((clr, index)=>(
        <button key={index} className={styles.selectedclr} onClick={()=>setColor(clr)} style={{background:clr, border: clr===color? "2px solid black":"none"}}></button>
    ))}
</div>

<button  className={styles.clrbtn} onClick={submitHandler}>CREATE</button>
   </div>
   </>
   
   
  )
}
