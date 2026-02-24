"use client";

import NavItem from "../NavItem/NavItem";
import { NAV_ITEMS } from "./contatns";
import useHideOnScroll from "../../hooks/useHideOnScroll/useHideOnScroll";

const Navbar = () => {
    const hidden = useHideOnScroll(50);

    return (
        <div
            aria-hidden={hidden}
            className={`fixed dark-glass top-8 left-14 w-auto px-9 py-2 border border-white/10 inline-flex items-center gap-9 rounded-full z-90 transform transition-all duration-300 ease-in-out ${
                hidden
                    ? "-translate-y-24 opacity-0 pointer-events-none"
                    : "translate-y-0 opacity-100"
            }`}
        >
            <a href="#home">
                <img src="/images/logo.png" alt="Logo" />
            </a>

            {NAV_ITEMS.map((item) => (
                <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
        </div>
    );
};

export default Navbar;
