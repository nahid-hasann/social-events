import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "light" : "")}
            className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? (
                <FaMoon className="text-gray-800" />
            ) : (
                <FaSun className="text-yellow-400" />
            )}
        </button>
    );
};

export default ThemeToggle;
