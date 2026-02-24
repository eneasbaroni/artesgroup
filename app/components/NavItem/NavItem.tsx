import Link from "next/link";
import { NavItemProps } from "./types";

const NavItem = ({ label, href }: NavItemProps) => {
    // Si es un anchor (comienza con #), usa <a> normal
    if (href.startsWith("/#")) {
        return (
            <a
                href={href}
                className="hover:text-ag-magent transition-colors duration-300"
            >
                {label}
            </a>
        );
    }

    // Para otras páginas, usa Link
    return (
        <Link
            href={href}
            className="hover:text-ag-magent transition-colors duration-300"
        >
            {label}
        </Link>
    );
};
export default NavItem;
