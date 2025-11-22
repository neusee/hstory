"use client";

import Navigation from "./navigation";
import Searchbar from "./searchbar";

export default function Header() {
    return (
        <nav className="h-[100px] flex items-center justify-between">
            <Navigation />
            <div className="flex items-center gap-5">
                <Searchbar />
            </div>
        </nav>
    );
}