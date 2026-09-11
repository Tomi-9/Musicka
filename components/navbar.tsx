"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative rounded">
      <div className="flex min-h-20 flex-row items-center justify-between pr-2 pl-6 text-center">
        <Link href="/" className="text-3xl text-zinc-200" onClick={() => setIsMenuOpen(false)}>
          Musicka
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          <button className="text-md m-4 rounded font-semibold hover:font-bold">Sign up</button>
          <button className="text-md rounded-full bg-sky-600 px-8 font-bold transition hover:scale-105 hover:bg-sky-700">Log in</button>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-zinc-200 transition hover:bg-zinc-800 md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isMenuOpen ? "flex" : "hidden"} absolute top-full right-0 left-0 z-50 flex-col gap-1 border-b border-slate-200 bg-black p-3 md:hidden`}
      >
        <button type="button" className="rounded-lg px-3 py-2 text-left font-bold text-white hover:bg-slate-400" onClick={() => setIsMenuOpen(false)}>
          Log in
        </button>
        <button type="button" className="rounded-lg px-3 py-2 text-left font-bold text-white hover:bg-slate-500" onClick={() => setIsMenuOpen(false)}>
          Sign up
        </button>
      </nav>
    </header>
  );
}
