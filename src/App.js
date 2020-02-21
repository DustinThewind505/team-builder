import React, {useState} from 'react';

import Form from './components/TeamForm';
import Card from './components/Person';
import Data from './Data';
import './App.css';

function App() {

  const [user, setUser] = useState(Data)
  
  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role,
      music: note.music,
    }
    setUser([...user, newNote])
  }

  return (
    <div className="app-container">
      <header>
        <h1>Form Management</h1>
        <img src="https://media.giphy.com/media/26FLh2XOL18X7oKPu/giphy.gif" alt="man pushing down cubicle" />
      </header>
      <div>
        <Card info={user}/>
        <Form addNewNote={addNewNote}/>
      </div>
      {/* <footer>
        <h1>Form Management</h1>
      </footer> */}
    </div>
  )
}

export default App;
