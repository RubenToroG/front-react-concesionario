import React from 'react';
import { useDarkMode } from 'context/darkMode'


const TriggerDarkMode = () => {
    const {darkMode, setDarkMode } = useDarkMode()

  return (
    <button onClick={() => {setDarkMode(!darkMode)}}>
    {darkMode ? 'Light' : 'Dark'} </button>
  )
};

export default TriggerDarkMode;
