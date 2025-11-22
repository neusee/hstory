"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NavigationMenu } from "@/constants/navigation-menu";
import { useEffect } from "react";

interface NavigationMenuItemProps {
    href: string;
    label: string;
}

export function NavigationMenuItem({ href, label }: NavigationMenuItemProps) {
    const router = useRouter();
    const pathname = usePathname();
    const active = pathname === href;

    useEffect(() => {
        router.replace("/");
    }, [ router ]);

    return (
        <Link
            href={ href }
            className={`px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer
                ${ active ? "bg-gray-100 text-black" : "text-gray-400 hover:bg-gray-100" }`}
        >
            { label }
        </Link>
    );
}

export default function Navigation() {
    return (
        <div className="flex items-center gap-5">
            { NavigationMenu.map((menu) => (
                <NavigationMenuItem key={ menu.href } { ...menu } />
            ))}
        </div>
    );
}