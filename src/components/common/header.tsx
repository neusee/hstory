import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
    const router = useRouter();

    return (
        <div>헤더</div>
    );
}