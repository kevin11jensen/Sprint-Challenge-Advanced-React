import React, { useEffect, useState } from 'react';

const useDarkMode = () => {

    const [darkMode, setDarkMode] = useState('dark-mode');

    useEffect(() => {
        if (darkMode === true) {
            window.document.body.classList.add('dark-mode');
        }
        else {
            window.document.body.classList.remove('dark-mode');
        }
        
       
    }, [darkMode])

    return [darkMode, setDarkMode]
}



export default useDarkMode;