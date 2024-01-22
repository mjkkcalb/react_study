// Header.js
import React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./Toggle";
import { Navigation } from "./Nav";
import headerStyles from "./header.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 90% 70px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className={headerStyles.side}>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom="100%"
      >
        <motion.div className={headerStyles.headernavbar} variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
}
