import React,{useContext} from 'react'
import { AppContext } from '../Context/Appcontext'
import styles from "./GroupContent.module.css"

export default function GroupContent() {
    const {group, setGroup, activeGroup, setActiveGroup}=useContext(AppContext);
    const getInitials = (name) => {
        return name.split(' ').map(word => word[0]).join('').toUpperCase();
      };
  return (
    <div className={styles.parent}>
            {group.map((group, index) => (
        <div key={index} className={styles.container1} onClick={()=>setActiveGroup(group.id)}>
          <div 
            className={styles.container2}
            style={{ backgroundColor: group.color }}
          >
            {getInitials(group.name)}
          </div>
          <span className={styles.text}>{group.name}</span>
        </div>
      ))}
    </div>
  )
}
