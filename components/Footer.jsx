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
                <div className="mb-5">
                    <p className="text-lg font-bold text-gray-800">Pack selection probability</p>
                    <ul className="list-none">
                        <li className="mb-1 text-gray-700">Regular pack: <strong className="font-bold">99.95%</strong></li>
                        <li className="mb-1 text-gray-700">God pack: <strong className="font-bold">0.05%</strong></li>
                    </ul>
                </div>
                <div className="mb-5">
                    <p className="text-lg font-bold text-gray-800">Card rarity probability</p>
                    <ul className="list-none">
                        <li className="mb-1 text-gray-700">Common: <strong className="font-bold">50%</strong></li>
                        <li className="mb-1 text-gray-700">Uncommon: <strong className="font-bold">35%</strong></li>
                        <li className="mb-1 text-gray-700">Rare: <strong className="font-bold">10%</strong></li>
                        <li className="mb-1 text-gray-700">Ultra Rare: <strong className="font-bold">1.5%</strong></li>
                        <li className="mb-1 text-gray-700">Illustration Rare: <strong className="font-bold">1%</strong></li>
                        <li className="mb-1 text-gray-700">Double Rare: <strong className="font-bold">1%</strong></li>
                        <li className="mb-1 text-gray-700">Special Illustration Rare: <strong className="font-bold">1%</strong></li>
                        <li className="mb-1 text-gray-700">Hyper Rare: <strong className="font-bold">0.5%</strong></li>
                    </ul>
                </div>
                <p className="text-sm text-gray-500">This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company.</p>
                </div>
            </div>
        </>
    )
}