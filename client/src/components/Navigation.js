import React from 'react';

const Navigation = () => {

    return (
        <nav>
            <h1>Womens World Cup</h1>
            <button 
            onClick={toggleMode}
            className={darkMode ? 'toggled' : 'toggle'}
            >
                Dark Mode
            </button>

        </nav>
    )
}

export default Navigation;