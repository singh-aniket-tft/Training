import './style/main.scss';
import React from 'react';
import Header from './components/header';
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Header />
      <p>This is my first React project with SCSS!</p>
    </div>
  );
}

import React, { useState } from "react";
import "./styles/main.scss";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="App">
      <h1>SCSS Theming Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// function created for login form
function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
