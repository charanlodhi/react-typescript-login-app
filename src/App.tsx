import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './component/Posts/Posts';
import Note from './component/Note/Note';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
function App() {
  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = (content: string) => {
    setNotes([...notes, content]);
  };
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      {/* <Posts /> */}
      <h1>Notes</h1>
      <Note onAddNote={handleAddNote} />
      <div className="note-list">
        {notes.map((note, index) => (
          <Note key={index} content={note} />
        ))}
      </div>
    </QueryClientProvider>
    </div>
  );
}

export default App;
