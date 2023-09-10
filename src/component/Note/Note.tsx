// src/components/AddNote.tsx

import React, { useState } from 'react';

interface AddNoteProps {
  onAddNote: (content: string) => void;
}

const Note: React.FC<AddNoteProps> = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteText(e.target.value);
  };

  const handleAddClick = () => {
    if (noteText.trim() !== '') {
      onAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="add-note">
      <input
        type="text"
        placeholder="Add a new note..."
        value={noteText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add</button>
    
    </div>
  );
};

export default Note;
