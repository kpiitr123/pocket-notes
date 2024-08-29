import React, {createContext, useState, useEffect} from 'react'

export const AppContext= createContext()

export const AppProvider = ({children})=>{
   //  localStorage.clear();
 const[group, setGroup ]=useState(
  ()=>{
    return  JSON.parse(localStorage.getItem('group')) || []
  }
 )

 useEffect(()=>{
    localStorage.setItem("group", JSON.stringify(group))
 },[group]);

 const [activeGroup, setActiveGroup] = useState(null);

 return (
    <AppContext.Provider value={{group, setGroup, activeGroup, setActiveGroup}}>
        {children}

    </AppContext.Provider>
 )
}


