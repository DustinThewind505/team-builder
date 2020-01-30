import React, { useState } from 'react';

import Person from './components/Person';
import TeamForm from './components/TeamForm';

import logo from './logo.svg';
import './App.css';

function App() {

  const addTeam = person => {
    setTeam([...team, person])
  }
  const [team, setTeam] = useState([
    {
      id: 1,
      title: "Awwww here it goes",
      body: "Kenan and Kel",
      name: "Kel Mitchell",
      email: "Kel@OrangeSoda.com",
      role: "Best Friend"
    },

    {
      id: 2,
      title: "Awwww here it goes",
      body: "Kenan and Kel",
      name: "Kenan Thompson",
      email: "Kenan@SNL.com",
      role: "Mastermind"
    }

  ])
  return (
    <div className="App">
      
      <header className="App-header">
      <TeamForm addTeam={addTeam}/>
      <Person person={team}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just Do It!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets Do This!
        </a>
      </header>
      
    </div>
  );
}

export default App;
