
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/Appcontext';
import styles from "./NotesSection.module.css";
import { BiSolidSend } from "react-icons/bi";

export default function NotesSection() {
  const { group, activeGroup } = useContext(AppContext);
  const [notes, setNotes] = useState({});
  const [currentNote, setCurrentNote] = useState('');

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    if (activeGroup) {
      setCurrentNote('');
    }
  }, [activeGroup]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleNoteSave = () => {
    if (!currentNote.trim()) return;

    setNotes(prevNotes => ({
      ...prevNotes,
      [activeGroup]: [...(prevNotes[activeGroup] || []), { text: currentNote, timestamp: new Date().toLocaleString() }]
    }));
    setCurrentNote('');
  };

  const getname = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const activeGroupDetails = group.find(g => g.id === activeGroup);
  const groupNotes = notes[activeGroup] || [];

  return (
    <div className={styles.rightscreen}>
      {activeGroup && activeGroupDetails && (
        <>
          <div className={styles.header}>
            <div className={styles.groupIcon} style={{ backgroundColor: activeGroupDetails.color }}>
              {getname(activeGroupDetails.name)}
            </div>
            <h2 className={styles.groupname}>{activeGroupDetails.name}</h2>
          </div>

          <div className={styles.notesArea}>
            {groupNotes.map((note, index) => (
              <div key={index} className={styles.noteCard}>
                <p className={styles.noteText}>{note.text}</p>
                <small className={styles.noteTimeStamp}>{note.timestamp}</small>
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <textarea
              className={styles.textarea}
              placeholder="Enter your text here..."
              value={currentNote}
              onChange={handleNoteChange}
              rows={4}
              
            />
            {currentNote ? (<div  onClick={handleNoteSave}><BiSolidSend style={{ color: "#001F8B" }} size="1.5rem" /></div>):(
            <div ><BiSolidSend style={{ color: "#CCCCCC" }} size="1.5rem" /></div>
)}
          </div>
        </>
      )}
    </div>
  )
}

