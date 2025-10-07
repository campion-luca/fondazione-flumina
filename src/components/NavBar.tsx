import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import logo_logo from '../assets/solo_logo.png';
import logo_scritta from '../assets/solo_scritta.png';
import { Link } from "react-router-dom";
import HeroDecor from "../assets/HeroDecor";

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
    <>
      {/* SVG */}
      <section className="absolute inset-0 z-[-1] overflow-hidden">
        <HeroDecor />
      </section>

      <nav className="grid grid-cols-1 md:grid-cols-2 relative z-20 shadow-sm mt-4">

        {/* Logo */}
        <div className="flex-shrink-0 font-bold flex items-center justify-center select-none py-4">
          <Link to="/">
            {/* <img src={logo_logo} alt="solo Logo fondazione" className="h-15 w-15 inline-block mr-2 cursor-pointer" /> */}
            <img src={logo_scritta} alt="scritta fondazione flumina" className="h-9 w-72 inline-block mr-2" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex flex-col justify-start items-start md:pt-5 relative">
          <ol className="hidden md:flex font-medium select-none w-full justify-evenly shadow-[4px_0_10px_rgba(0,0,0,0.25)] px-4">
            <li className="cursor-pointer pe-3 shadow-[4px_0_10px_rgba(0,0,0,0.25)]" onClick={() => toggleMenu('fondazione')}>La Fondazione</li>
            <li className="cursor-pointer pe-3 shadow-[4px_0_10px_rgba(0,0,0,0.25)]" onClick={() => toggleMenu('eventi')}>Eventi</li>
            <li className="cursor-pointer pe-3 shadow-[4px_0_10px_rgba(0,0,0,0.25)]" onClick={() => toggleMenu('about')}>Contatti</li>
            <li className="cursor-pointer pe-3 " onClick={() => toggleMenu('home')}>Home</li>
          </ol>


          {/* Dropdown Desktop Animato */}
          <AnimatePresence>
            {openMenu && (
              <motion.ul
                key={openMenu}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 w-full shadow-lg md:flex justify-around items-center space-x-6 font-medium py-3 z-30 text-sm"
              >
                {openMenu === 'fondazione' && (
                  <>
                    <li className="cursor-pointer hover:underline">Chi siamo</li>
                    <li className="cursor-pointer hover:underline">Il nostro presidente</li>
                    <li className="cursor-pointer hover:underline"><Link to="/privacy">La nostra privacy</Link></li>
                    <li className="cursor-pointer hover:underline">Partner/Collaborazioni</li>
                  </>
                )}
                {openMenu === 'eventi' && (
                  <>
                    <li className="cursor-pointer hover:underline">Album</li>
                    <li className="cursor-pointer hover:underline">Archivio eventi</li>
                    <li className="cursor-pointer hover:underline">News</li>
                  </>
                )}
                {openMenu === 'about' && (
                  <li className="cursor-pointer hover:underline">Dove trovarci</li>
                )}
                {openMenu === 'home' && (
                  <li className="cursor-pointer hover:underline"><Link to="/">Torna alla pagina iniziale</Link></li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end items-center px-4 py-2 border-gray-200">
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

        {/* Mobile Menu Animato */}
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
              <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Contatti</li>
              <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Home</li>
            </motion.ol>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBar;
