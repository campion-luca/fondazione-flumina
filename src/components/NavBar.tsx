import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo_logo from '../assets/solo_logo.png';
import logo_scritta from '../assets/solo_scritta.png';

const NavBar = () => {
  const [alignStart, setAlignStart] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  type MenuName = 'fondazione' | 'eventi' | 'about' | 'home';
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);

  const toggleMenu = (menuName: MenuName) => {
    setAlignStart(!alignStart);
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-[#1b4a54]">

      {/* Logo */}
      <a href="/">
      <div className="flex-shrink-0 font-bold text-xl md:border-r border-b flex items-center justify-center select-none py-4">
        <img src={logo_logo} alt="solo Logo fondazione" className="h-15 w-15 inline-block mr-2 cursor-pointer" />
        <img src={logo_scritta} alt="scritta fondazione flumina" className="h-8 w-60 inline-block mr-2 cursor-pointer" />
      </div>
      </a>

      {/* Desktop Menu */}
      <div className="md:border-b flex flex-col justify-start items-start md:pt-5">
        <ol className="hidden md:flex font-medium text-[#27535d] select-none w-full justify-evenly border-b px-4"> 
          <li className="cursor-pointer pe-3 border-r" onClick={() => toggleMenu('fondazione')}>La Fondazione</li>
          <li className="cursor-pointer pe-3 border-r" onClick={() => toggleMenu('eventi')}>Eventi</li>
          <li className="cursor-pointer pe-3 border-r" onClick={() => toggleMenu('about')}>About</li>
          <li className="cursor-pointer pe-3 " onClick={() => toggleMenu('home')}>Home</li>
        </ol>

        {/* Menu a scomparsa animato */}
        <AnimatePresence>
          {openMenu === 'fondazione' && (
            <motion.ol
              key="fondazione"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex justify-around items-center w-full space-x-15 font-medium text-[#27535d] pt-2"
            >
              <li className="cursor-pointer md:ps-3 hover:underline">La nostra privacy</li>
              <li className="cursor-pointer hover:underline">Il nostro presidente</li>
              <li className="cursor-pointer md:pe-3 hover:underline">Chi siamo</li>
            </motion.ol>
          )}

          {openMenu === 'eventi' && (
            <motion.ol
              key="eventi"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex justify-around items-center w-full space-x-15 font-medium text-[#27535d] pt-2"
            >
              <li className="cursor-pointer hover:underline">Album</li>
              <li className="cursor-pointer hover:underline">Giornale</li>
              <li className="cursor-pointer hover:underline">News</li>
            </motion.ol>
          )}

          {openMenu === 'about' && (
            <motion.ol
              key="about"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex justify-around items-center w-full space-x-15 font-medium text-[#27535d] pt-2"
            >
              <li className="cursor-pointer hover:underline">Contatti</li>
            </motion.ol>
          )}

          {openMenu === 'home' && (
            <motion.ol
              key="home"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden md:flex justify-around items-center w-full space-x-15 font-medium text-[#27535d] pt-2"
            >
              <li className="cursor-pointer hover:underline">Homepage</li>
            </motion.ol>
          )}
        </AnimatePresence>
      </div>

      {/* Parte di destra */}
      <div className="hidden xl:flex flex-col items-center justify-end border-l border-b">
        <ol className="xl:flex space-x-15 font-medium text-gray-400 select-none">
          <li className="cursor-not-allowed">Info</li>
          <li className="cursor-not-allowed">Sito in allestimento</li>
        </ol>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end items-center px-4 py-2 border-b">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu animato */}
      <AnimatePresence>
        {isOpen && (
          <motion.ol
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-primary px-2 pt-2 pb-3 space-y-1 select-none"
          >
            <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">La Fondazione</li>
            <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Eventi</li>
            <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">About</li>
            <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Home</li>
          </motion.ol>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
