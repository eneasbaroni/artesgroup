import NavItem from "../NavItem/NavItem";
import { NAV_ITEMS } from "./contatns";

const Navbar = () => {
    return (
        <div className="fixed dark-glass top-8 left-14 w-auto px-9 py-2 border border-white/10 inline-flex items-center gap-9 rounded-full z-10">
            <img src="/images/logo.png" alt="Logo" />

            {NAV_ITEMS.map((item) => (
                <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
        </div>
    );
};
export default Navbar;
