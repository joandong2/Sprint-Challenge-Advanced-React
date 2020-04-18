import { useState, useEffect } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            window.document.body.classList.add("dark-mode");
        } else {
            window.document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return [darkMode, toggleMode];
};

export default Header;
