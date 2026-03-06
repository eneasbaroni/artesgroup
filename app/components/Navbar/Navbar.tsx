"use client";

import NavItem from "../NavItem/NavItem";
import { NAV_ITEMS } from "./constants";
import useHideOnScroll from "../../hooks/useHideOnScroll/useHideOnScroll";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Link from "next/link";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const hidden = useHideOnScroll(50);

  const toggleMobileMenu = () => {
    console.log("probando");
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      <div
        aria-hidden={hidden}
        className={`tablet:hidden fixed dark-glass top-8 left-14 w-auto px-9 py-2 border border-white/10 inline-flex items-center gap-9 rounded-full z-90 transform transition-all duration-300 ease-in-out ${
          hidden
            ? "-translate-y-24 opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        <Link href="/#home">
          <img src="/images/logo.svg" alt="Logo" className="w-20" />
        </Link>

        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} label={item.label} href={item.href} />
        ))}
      </div>

      {/* Menú móvil */}
      <div
        className={`flex px-10 mt-4 w-full lg:hidden fixed flex-row items-center justify-between z-90
                ${
                  hidden
                    ? "-translate-y-24 opacity-0 pointer-events-none"
                    : "translate-y-0 opacity-100"
                }
                `}
      >
        <Link
          href="/#home"
          className="p-4 pt-5 rounded-full w-auto h-auto dark-glass border border-white/10 flex items-center justify-center"
        >
          <img src="/images/logo.svg" alt="Logo" className="w-15" />
        </Link>
        {/* Menú hamburguesa */}
        <button
          className="ml-4 z-90 p-4 dark-glass rounded-full border border-white/10"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {showMobileMenu && (
          <MobileMenu onClose={() => setShowMobileMenu(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
