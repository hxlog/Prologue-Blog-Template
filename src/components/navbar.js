'use client';

import headerNavLinks from "../../data/headerNavLinks";
import ThemeSwitch from "./themeswitch"
import MobileNav from "./mobilenav"
import Link from 'next/link'
import siteMetadata from "../../data/sitemetadata";

export default function Navbar(){
    return (
      <header className="flex items-center justify-between py-3 mx-auto">
        <div>
          <Link href="/" aria-label={siteMetadata.publishName} passHref >
            <div className="flex items-center justify-between">
              <div className="text-xl whitespace-nowrap font-semibold rounded-lg sm:block text-zinc-800 hover:bg-zinc-50 dark:hover:bg-slate-800 dark:text-zinc-200 select-none tracking-tight px-3 py-1 duration-300">
                {siteMetadata.publishName}
              </div>
            </div>
          </Link>
        </div>
        <nav className="flex items-center text-base leading-6">
          <div className="hidden sm:block" tabIndex="0">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="rounded-lg px-3 py-2 font-normal text-zinc-500 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-slate-800 transition trasnform duration-300 select-none"
                 >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
        <div className="flex items-center text-base leading-5">
            <MobileNav />
          <ThemeSwitch />
        </div>
      </header>
    );
}