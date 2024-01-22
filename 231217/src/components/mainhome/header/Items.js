import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import itemStyles from "./header.module.css";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ id, text, icon, link }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={itemStyles.headerList}
    >
      <div className={itemStyles.iconPlaceholder}>
        <Link to={link} className={itemStyles.icon}>
          <img src={icon} alt="" className={itemStyles.navicon} />
        </Link>
      </div>

      <div className={itemStyles.textPlaceholder}>
        <Link to={link} className={itemStyles.headertext}>
          {text}
        </Link>
      </div>
    </motion.li>
  );
};
