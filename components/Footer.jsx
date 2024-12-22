'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <footer className={`flex flex-col items-center justify-center fixed bottom-0`}>
                <nav>
                <ul className="flex justify-center gap-8">
                    <li>
                    <Link className={`home-icon icon`} href="/"><span className="sr-only">Home</span></Link>
                    </li>
                    <li>
                    <Link className={`deck-icon icon`} href="/sv3pt5"><span className="sr-only">Deck</span></Link>
                    </li>
                    <li>
                    <button className="info-icon icon" onClick={() => setOpen(true)}><span className="sr-only">Info</span></button>
                    </li>
                </ul>
                </nav>
            </footer>

            <div className={`dialog-container ${open ? 'open' : ''}`}>
                <div className="dialog-content">
                <button className="close-button" onClick={() => setOpen(false)}>
                    <span className="sr-only">Close</span>
                </button>
                <p className="text-sm text-gray-500 text-center">This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company.</p>
                </div>
            </div>
        </>
    )
}