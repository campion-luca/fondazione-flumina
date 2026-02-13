import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo_scritta from '../assets/logo/solo_scritta.png';
import { Link } from "react-router-dom";

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
        setMobileOpenMenu(null); // chiude la tendina mobile se il click è fuori
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
      {/* Si dovrebbe rimpiazzare il logo "scritto" con un testo in bianco */}
      {/* bg-[#1f3b45] text-white shadow-md */}

      <nav
        ref={menuRef}
        className="fixed w-full grid grid-cols-1 md:grid-cols-2 z-50 text-[#1b4a54] shadow-md backdrop-blur-md bg-white/50 border-b border-b-[#1b4a54]">
        {/* Logo */}
        <div className="shrink-0 font-bold flex items-center justify-center select-none py-4">
          <Link to="/">
            <img
              src={logo_scritta}
              alt="scritta fondazione flumina"
              className="h-10 w-85 md:h-15 md:w-95 lg:h-13 lg:w-110 inline-block mr-2"
            />
          </Link>
        </div>

        {/* Desktop Menu  */}
        <div className="flex flex-col justify-center items-start relative text-xl">
          <ol className="hidden md:flex font-medium select-none w-full justify-evenly">
            <li className="cursor-pointer px-3" onClick={() => setOpenMenu(null)}><Link to='/'>Home</Link></li>
            <li className="cursor-pointer" onClick={() => toggleMenu('fondazione')}>La Fondazione</li>
            <li className="cursor-pointer" onClick={() => toggleMenu('eventi')}>Eventi</li>
            {/* <li className="cursor-pointer" onClick={() => toggleMenu('about')}>Contatti</li> */}
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
                className="absolute top-full left-0 w-full md:flex justify-around items-center space-x-6 font-medium py-3 z-30 
                text-sm shadow-md backdrop-blur-md bg-white/50 border-b border-l"
              >
                {openMenu === 'fondazione' && (
                  <>
                    <li className="cursor-pointer" onClick={toggleFocus}>
                      <Link to="/chisiamo">Chi siamo</Link></li>
                    <li className="cursor-pointer" onClick={toggleFocus}>
                      <Link to="/presidente">Il nostro presidente</Link>
                    </li>
                    <li className="cursor-pointer" onClick={toggleFocus}>
                      <Link to="/privacy">La nostra privacy</Link>
                    </li>
                    <li className="cursor-pointer text-gray-600/50" onClick={toggleFocus}>Partner/Collaborazioni</li>
                  </>
                )}
                {openMenu === 'eventi' && (
                  <>
                    <li className="text-gray-400 cursor-not-allowed">Album</li>
                    <li className="cursor-pointer" onClick={toggleFocus}>
                      <Link to="/eventi">Archivio eventi</Link>
                    </li>
                  </>
                )}
                {openMenu === 'about' && (
                  <li className="cursor-pointer" onClick={toggleFocus}>Dove trovarci</li>
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>



        {/* -------------------------- Mobile Menu Button -------------------------- */}
        <div className="flex flex-col text-sm items-center md:hidden">

          {/* Bottone menu principale */}
          <div className="flex justify-end items-center pb-1 space-x-2">


            <Link to='/'>
              <div
                className="px-4 py-2 font-semibold cursor-pointer"
                onClick={() => setMobileOpenMenu(null)}
              >
                Home
              </div>
            </Link>

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
            {/* <div
              className="px-4 py-2 font-semibold cursor-pointer"
              onClick={() => toggleMobileMenu('about')}
            >
              Contatti
            </div> */}


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
                className="w-full shadow-lg mt-1 flex flex-col items-start text-xs font-medium"
              >
                {mobileOpenMenu === 'fondazione' && (
                  <>
                    <Link to="/chisiamo">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                        Chi siamo
                      </li></Link>

                    <Link to="/presidente">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                        Il nostro presidente
                      </li></Link>

                    <Link to="/privacy">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                        La nostra privacy
                      </li></Link>
                  </>
                )}
                {mobileOpenMenu === 'eventi' && (

                  <Link to="/eventi">
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                      Archivio eventi
                    </li></Link>
                )}
                {/* {mobileOpenMenu === 'about' && (
                  <Link to="/contatti">
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => setMobileOpenMenu(null)}>
                      Dove trovarci
                    </li></Link>
                )} */}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>

    </>
  );
};

export default NavBar;
