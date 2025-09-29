import { useState } from "react";
import logo from '../assets/fondazione_flumina.png';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md bg-gray-100 text-[#1b4a54]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            <img src={logo} alt="Logo fondazione flumina" className="h-8 w-8 inline-block mr-2" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Album</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

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
        <div className="md:hidden bg-primary px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-white font-medium hover:underline">Home</a>
          <a href="#" className="block text-white font-medium hover:underline">About</a>
          <a href="#" className="block text-white font-medium hover:underline">Services</a>
          <a href="#" className="block text-white font-medium hover:underline">Contact</a>
        </div>
      )}
    </nav>
    )
}

export default NavBar;