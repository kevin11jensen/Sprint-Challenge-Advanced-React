import React, { useState } from 'react';
import {Button} from 'reactstrap';
import './App.css';
import PlayerList from './components/PlayerList';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <>
    <div className="App">
      <h1>Player List</h1>
        <div className="navigation">
          <Button className="dark-mode-toggle">
            DarkMode
            <div 
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}>

            </div>
        </Button>
      </div>

      <PlayerList />
    </div>
    </>
  );
}

export default App;