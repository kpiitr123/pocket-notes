
import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/Appcontext';
import styles from "./HomePage.module.css";
import pocket from "../assets/pocket.png";
import Footer from '../components/Footer';
import Form from '../components/Form';
import GroupContent from '../components/GroupContent';
import NotesSection from '../components/NotesSection';

export default function HomePage() {
    const { group, setGroup, activeGroup, setActiveGroup } = useContext(AppContext);
    const [popup, setPopup] = useState(false);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const[id, setId]=useState(1);

    const submitHandler = () => {
        if (color.trim() && name.trim()) {
            setId(id+1);
            const recentGroup = { name, color,id }; 
            const updatedGroup = [...group, recentGroup]; 
            setGroup(updatedGroup); 
            setName(''); 
            setColor(''); 
            setPopup(false); 
        } else {
            alert('Please enter a group name and select a color.');
        }
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.stickyHeader}> 
                    <h2>Pocket Notes</h2>
                    </div>
                    
                    <GroupContent/>
                  
                    <button className={styles.btn} onClick={() => setPopup(!popup)}>
                        +
                    </button>
                   
                   
                    {popup && (
                        <Form
                            name={name}
                            setName={setName}
                            color={color}
                            setColor={setColor}
                            submitHandler={submitHandler}
                        />
                    )}
                     
                </div>
              

                <div className={styles.right}>
                    {activeGroup ? (
                        <NotesSection/>

                    ): (
                        <>
                    <div className={styles.pocket}>
                        <img src={pocket} alt="" />
                    </div>
                    <h1>Pocket Notes</h1>
                    <p className={styles.description}>
                        Send and receive messages without keeping your phone online.
                        Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
                    </p>
                    <Footer />
                    </>
                    )}
                </div>
               
            </div>
        </>
    )
}

