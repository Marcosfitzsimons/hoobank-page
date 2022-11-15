"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuToggle from "./MenuToggle";

const MobileNav = ({ navLinks }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  const mobileNavVariants = {
    closed: {
      x: 400,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      x: "100vw",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <>
      <MenuToggle showMenu={showMenu} setShowMenu={setShowMenu} />
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            variants={mobileNavVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="min-h-screen absolute inset-y-0 right-0 left-[40%] py-[min(20rem,15vh)] px-8 bg-black/90 backdrop-blur-md md:hidden -z-50"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li
                  onClick={handleShowMenu}
                  key={link.id}
                  className={`${
                    link.active ? "text-white" : "text-gray-400"
                  } cursor-pointer`}
                >
                  {link.content}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
