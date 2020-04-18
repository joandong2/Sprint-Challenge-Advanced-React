import React, { useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <p>Sprint Challenge - Advanced React (Web: Unit 3, Sprint 1)</p>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default Header;
