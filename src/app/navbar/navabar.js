'use client';

import { useState } from 'react';
import { FiSearch, FiBell, FiDownload, FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router =useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
const loginClick=()=>{
  router.push('/Login');
  console.log("hi from next navigation")
}
  return (
    <nav className="bg-black/80 text-white px-4 sm:px-6 py-3 flex justify-between items-center shadow-md relative z-10">
      {/* Left: Logo + Menu */}
      <div className="flex items-center">
        <div className="text-cyan-400 text-xl sm:text-2xl font-bold">BitSense</div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4 xl:space-x-5 font-medium ml-6">
          <li className="hover:text-cyan-400 cursor-pointer">Buy crypto</li>
          <li className="hover:text-cyan-400 cursor-pointer">Markets</li>
          <li className="hover:text-cyan-400 cursor-pointer">Trade</li>
          <li className="hover:text-cyan-400 cursor-pointer">Futures</li>
          <li className="hover:text-cyan-400 cursor-pointer">Bots</li>
          <li className="hover:text-cyan-400 cursor-pointer">Earn</li>
          <li className="hover:text-cyan-400 cursor-pointer">Copy</li>
          <li className="hover:text-cyan-400 cursor-pointer">Web3</li>
          <li className="hover:text-cyan-400 cursor-pointer">Launchhub</li>
        </ul>
      </div>
      
      {/* Right: Actions */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="hidden sm:block text-sm text-white hover:text-cyan-400" onClick={loginClick}>
          Log in
        </button>
        <button className="hidden sm:block bg-white text-black rounded-md px-4 py-1 text-sm font-semibold hover:bg-gray-200">
          Sign up
        </button>
        
        <FiSearch className="hidden sm:block w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        <FiBell className="hidden sm:block w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        <FiDownload className="hidden sm:block w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        <FiGlobe className="hidden sm:block w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden ml-2 text-white focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Fixed z-index */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[58px] left-0 right-0 bg-black/95 z-50 max-h-screen overflow-y-auto">
          <ul className="flex flex-col p-4">
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Buy crypto</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Markets</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Trade</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Futures</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Bots</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Earn</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Copy</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Web3</li>
            <li className="py-2 hover:text-cyan-400 cursor-pointer border-b border-gray-800">Launchhub</li>
            <div className="flex space-x-4 py-3 mt-2">
              <FiSearch className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
              <FiBell className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
              <FiDownload className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
              <FiGlobe className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
            </div>
            <div className="flex pt-3 space-x-3">
              <button className="text-sm text-white hover:text-cyan-400" onClick={loginClick}>
                Log in
              </button>
              <button className="bg-white text-black rounded-md px-4 py-1 text-sm font-semibold hover:bg-gray-200">
                Sign up
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;