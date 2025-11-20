"use client";

import Navigation from "./navigation";
import Searchbar from "./searchbar";
import ThemeSwitcher from "../theme-switcher";

export default function Header() {
    return (
        <nav className="h-[90px] flex items-center justify-between">
            <div className="">
                <Navigation />
            </div>
            <div className="flex items-center gap-5">
                <Searchbar />
                <ThemeSwitcher />
            </div>
        </nav>
    );
}