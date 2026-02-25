import NavItem from "@/app/components/NavItem/NavItem";
import { NAV_ITEMS } from "../../contatns";
import { motion } from "motion/react";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-10 bg-ag-black/90 backdrop-blur-xs z-100"
      initial={{ y: "-100%", borderRadius: "0 0 50% 50%" }}
      animate={{ y: "0%", borderRadius: "0" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      exit={{ y: "-100%", borderRadius: "0 0 50% 50%" }}
      onClick={onClose}
    >
      <button onClick={onClose} className="text-3xl text-ag-magent">
        X
      </button>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          href={item.href}
          className="text-2xl font-anton uppercase"
        />
      ))}
    </motion.div>
  );
};
export default MobileMenu;
