import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    const toggleMode = e => {
        e.prevent.default();
        setDarkMode(!darkMode);
    }
    useEffect(() => {
        if(darkMode === false){
            document.body.className = '';
        }if(darkMode === true){
            document.body.className = 'dark-mode';
        }
    }, 
    [darkMode], 
    )

    return [darkMode, toggleMode];
}