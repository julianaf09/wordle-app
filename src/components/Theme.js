import React, {useState, useEffect} from 'react';

const Theme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const handleThemeToggle = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <label className='theme-switch'>
            <input 
              type="checkbox"
              checked={isDarkMode}
              onChange={handleThemeToggle}
             />
             <span className='slider round'></span>
        </label>
    );
};

export default Theme;