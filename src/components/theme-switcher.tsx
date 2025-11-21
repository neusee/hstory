"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <button 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            { theme === "light" ? <Moon /> : <Sun /> }
        </button>
    );
}