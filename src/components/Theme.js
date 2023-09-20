import React, { useState, useEffect } from "react";
import Switch from '@mui/material/Switch'
import { FormControlLabel } from "@mui/material";

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    changeTheme();
  }, []);

  const changeTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "dark");
  };

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="theme-switch">
        <FormControlLabel 
            value="start"
            control={<Switch checked={isDarkMode} onChange={handleThemeToggle}
            label="Change theme"
            labelPlacement="start"
      />}
        />

      
      
    </label>
  );
};

export default Theme;
