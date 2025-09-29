import { useState } from "react";
import logo from '../assets/fondazione_flumina.png';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md text-[#1b4a54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            <img src={logo} alt="Logo fondazione flumina" className="h-8 w-8 inline-block mr-2" />
          </div>

          {/* Desktop Menu */}
          <ol className="hidden md:flex space-x-8 font-medium text-gray-400 opacity-50 cursor-not-allowed">
            <li>Home</li>
            <li>About</li>
            <li>Album</li>
            <li>Contact</li>
          </ol>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ol className="md:hidden bg-primary px-2 pt-2 pb-3 space-y-1">
          <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Home</li>
          <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">About</li>
          <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Services</li>
          <li className="block font-medium text-center text-gray-400 opacity-50 cursor-not-allowed">Contact</li>
        </ol>
      )}
    </nav>
    )
}

export default NavBar;