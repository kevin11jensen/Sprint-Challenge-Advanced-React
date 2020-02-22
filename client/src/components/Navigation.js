import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navigation = () => {
 const [darkMode, toggleMode] = useDarkMode('dark', false);

    return (
        <nav>
            <h1>Womens World Cup</h1>
            <button 
            className='dark-mode'
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            >
                Dark Mode
            </button>

        </nav>
    );
};

export default Navigation;