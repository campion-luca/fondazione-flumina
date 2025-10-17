import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import logo_logo from '../assets/solo_logo.png';
import logo_scritta from '../assets/solo_scritta.png';
import { Link } from "react-router-dom";
import HeroDecor from "../assets/HeroDecor";

const NavBar = () => {
  const [alignStart, setAlignStart] = useState(true);

  type MenuName = 'fondazione' | 'eventi' | 'about' | 'home';
  const [openMenu, setOpenMenu] = useState<MenuName | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Apre la tendina del menu richiesto/cliccato
  const toggleMenu = (menuName: MenuName) => {
    setAlignStart(!alignStart);
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Quando si seleziona un sottomenu toglie la tendina del menu
  const toggleFocus = () => {
    setAlignStart(!alignStart);
    setOpenMenu(null);
  };

  // Chiude il menu cliccando fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null); // chiude la tendina se il click è fuori
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Apertura sottomenu mobile
  const [mobileOpenMenu, setMobileOpenMenu] = useState<MenuName | null>(null);
  const toggleMobileMenu = (menuName: MenuName) => {
    setMobileOpenMenu(mobileOpenMenu === menuName ? null : menuName);
  };


  return (
    <>
      {/* SVG */}
      <section className="absolute inset-0 z-[-1] overflow-hidden">
        <HeroDecor />
      </section>

      <nav
        ref={menuRef}
        className="grid grid-cols-1 md:grid-cols-2 relative z-20 shadow-sm mt-4 text-[#1b4a54]"
      >
        {/* Logo */}
        <div className="flex-shrink-0 font-bold flex items-center justify-center select-none py-4">
          <Link to="/">
            {/* <img src={logo_logo} alt="solo Logo fondazione" className="h-15 w-15 inline-block mr-2 cursor-pointer" /> */}
            <img
              src={logo_scritta}
              alt="scritta fondazione flumina"
              className="h-9 w-80 inline-block mr-2"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex flex-col justify-start items-start md:pt-5 relative">
          <ol className="hidden md:flex font-medium select-none w-full justify-evenly shadow-[4px_0_10px_rgba(0,0,0,0.25)] px-4">
            <li className="cursor-pointer pe-3" onClick={() => toggleMenu('home')}>Home</li>
            <li className="cursor-pointer pe-3" onClick={() => toggleMenu('fondazione')}>La Fondazione</li>
            <li className="cursor-pointer pe-3" onClick={() => toggleMenu('eventi')}>Eventi</li>
            <li className="cursor-pointer pe-3" onClick={() => toggleMenu('about')}>Contatti</li>
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
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>
                      <Link to="/chisiamo">Chi siamo</Link></li>
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>
                      <Link to="/presidente">Il nostro presidente</Link>
                    </li>
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>
                      <Link to="/privacy">La nostra privacy</Link>
                    </li>
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>Partner/Collaborazioni</li>
                  </>
                )}
                {openMenu === 'eventi' && (
                  <>
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>Album</li>
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>
                      <Link to="/eventi">Archivio eventi</Link>
                    </li>
                    <li className="cursor-pointer hover:underline" onClick={toggleFocus}>News</li>
                  </>
                )}
                {openMenu === 'about' && (
                  <li className="cursor-pointer hover:underline" onClick={toggleFocus}>Dove trovarci</li>
                )}
                {openMenu === 'home' && (
                  <li className="cursor-pointer hover:underline" onClick={toggleFocus}>
                    <Link to="/">Torna alla pagina iniziale</Link>
                  </li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>



        {/* -------------------------- Mobile Menu Button -------------------------- */}
        <div className="md:hidden flex flex-col text-sm items-center">

          {/* Bottone menu principale */}
          <div className="flex justify-end items-center shadow-md pb-1 space-x-2">
            <div
              className="px-4 py-2 font-semibold cursor-pointer"
              onClick={() => toggleMobileMenu('fondazione')}
            >
              Fondazione
            </div>
            <div
              className="px-4 py-2 font-semibold cursor-pointer"
              onClick={() => toggleMobileMenu('eventi')}
            >
              Eventi
            </div>
            <div
              className="px-4 py-2 font-semibold cursor-pointer"
              onClick={() => toggleMobileMenu('about')}
            >
              Contatti
            </div>

            <Link to='/'>
              <div
                className="px-4 py-2 font-semibold cursor-pointer"
              >
                Home
              </div>
            </Link>
          </div>

          {/* Dropdown mobile animato */}
          <AnimatePresence>
            {mobileOpenMenu && (
              <motion.ul
                key={mobileOpenMenu}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full shadow-lg mt-1 bg-white flex flex-col items-start text-sm font-medium"
              >
                {mobileOpenMenu === 'fondazione' && (
                  <>
                    <Link to="/chisiamo">
                      <li className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                      </li>Chi siamo</Link>

                    <Link to="/presidente">
                      <li className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                        Il nostro presidente
                      </li></Link>

                    <Link to="/privacy">
                      <li className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                        La nostra privacy
                      </li></Link>
                  </>
                )}
                {mobileOpenMenu === 'eventi' && (

                  <Link to="/eventi">
                    <li className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                      Archivio eventi
                    </li></Link>
                )}
                {mobileOpenMenu === 'about' && (
                  <li className="px-4 py-2 w-full cursor-pointer hover:bg-gray-100">Dove trovarci</li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>

    </>
  );
};

export default NavBar;
