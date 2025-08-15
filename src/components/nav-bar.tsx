import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./styles/nav-bar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="navbar">
      <h2>CapyCom Links 🔗</h2>
      <div className="navbar-actions">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
        <img
          src="https://i.imgur.com/EJgNNJa.jpeg"
          alt="Capivara"
        />
      </div>
    </div>
  );
}
