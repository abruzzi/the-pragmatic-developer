import {useState} from "react";

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] =
    useState(false);

  return <button onClick={
    () => setDarkMode(mode => !mode)}>
    {darkMode ? "Dark mode" : "Light mode"}
  </button>
}