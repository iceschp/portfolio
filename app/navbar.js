import React from 'react';
import Link from "next/link"

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="nameLogoBox">
                <Link href="https://iceschp.github.io/portfolio/" className="text-xl sm:text-3xl font-bold">Warunya S.</Link>
            </div>
                <Link href="/info" className="text-base sm:text-xl hover:underline">Info</Link>
        </div>
    )
};

