import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";
import navStyles from "./header.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Items = [
  { id: "0", text: "Library", link: "/library" },
  { id: "1", text: "Search", link: "/search" },
  { id: "2", text: "Feed", link: "/feed" },
  { id: "3", text: "Mybook", link: "/mybook" },
];

export const Navigation = () => (
  <motion.ul variants={variants} className={navStyles.headerul}>
    {Items.map((item) => (
      <MenuItem
        id={item.id}
        key={item.id}
        text={item.text}
        icon={item.icon}
        link={item.link}
      />
    ))}
  </motion.ul>
);
