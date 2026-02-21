import { NavItemProps } from "./types";

const NavItem = ({ label, href }: NavItemProps) => {
    return (
        <a
            href={href}
            className="hover:text-ag-magent transition-colors duration-300"
        >
            {label}
        </a>
    );
};
export default NavItem;
