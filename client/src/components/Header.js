import React from "react";

import useDarkMode from "../hooks/useToggle.js";

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <nav className="navbar">
            <p>
                Sprint Challenge - Advanced React (Web: Unit 3, Sprint 1)
                {darkMode && <span className="dark-mode-text">Dark Mode</span>}
            </p>
            <div className="dark-mode__toggle">
                <div
                    data-testid="toggle"
                    onClick={setDarkMode}
                    className={darkMode ? "toggle toggled" : "toggle"}
                />
            </div>
        </nav>
    );
};

export default Header;
