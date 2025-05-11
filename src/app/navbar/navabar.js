'use client';

import { useState } from 'react';
import { FiSearch, FiBell, FiDownload, FiGlobe, FiMenu, FiX,FiLogIn, FiChevronRight  } from 'react-icons/fi';
import { useRouter } from 'next/navigation';import { FiHome } from "react-icons/fi";



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
const handleMarketsClick=()=>{
  router.push('/cryptos');
}
const protfoliotracker=()=>{
  router.push('/Portfolio')
}
const Gotohome=()=>{
  router.push('/')
}
  return (
    <nav className="
    bg-gray-900/95 backdrop-blur-lg
    border-b border-cyan-500/20
    px-4 sm:px-6 lg:px-8 py-3
    flex justify-between items-center
    shadow-xl shadow-cyan-500/5
    relative z-50
    font-sans
  ">
    {/* Left: Logo + Menu */}
    <div className="flex items-center space-x-8">
      {/* Logo with glow effect */}
      <div className="
        text-2xl sm:text-3xl font-bold
        bg-clip-text text-transparent
        bg-gradient-to-r from-cyan-400 to-blue-500
        drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]
      ">
        BitSense
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-1">
      {/* Buy Crypto */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Buy crypto
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Markets */}
      <li className="relative group">
        <a
          className="px-3 cursor-pointer py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          onClick={handleMarketsClick}
        >
          Markets
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Trade */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Trade
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Futures */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Futures
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Bots */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Bots
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Earn */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Earn
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Copy */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Copy
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Web3 */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Web3
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>

      {/* Launchhub */}
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          
        >
          Launchhub
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>
      <li className="relative group">
        <a
          className="px-3 py-2 text-sm cursor-pointer font-medium text-gray-300 hover:text-white transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
          onClick={protfoliotracker}
        >
          Portfolio Tracker
          <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3" />
        </a>
      </li>
      
    </ul>
    </div>
    

<div className="ml-50">
  <button
    className="
      p-2 rounded-full
      bg-gray-800/50 hover:bg-gray-700/70
      transition-all duration-200
      group
    "
    aria-label="Go to Home"
    onClick={Gotohome}
  >
    <FiHome
      className="
        w-5 h-5 text-gray-400
        group-hover:text-cyan-400
        group-hover:scale-110
        transition-transform duration-200
      "
    />
    <span
      className="
        absolute top-0 right-0
        w-2 h-2 bg-green-500 rounded-full
        ring-2 ring-gray-900
      "
    />
  </button>
</div>

    
    {/* Right: Actions */}
    <div className="flex items-center space-x-3 sm:space-x-4">
      {/* Search Button with Micro-interaction */}
      <button className="
        p-2 rounded-full
        bg-gray-800/50 hover:bg-gray-700/70
        transition-all duration-200
        group
      ">
        <FiSearch className="
          w-5 h-5 text-gray-400
          group-hover:text-cyan-400
          group-hover:scale-110
          transition-transform duration-200
        "/>
      </button>
  
      {/* Notification Badge */}
      <div className="relative">
        <button className="
          p-2 rounded-full
          bg-gray-800/50 hover:bg-gray-700/70
          transition-all duration-200
          group
        ">
          <FiBell className="
            w-5 h-5 text-gray-400
            group-hover:text-cyan-400
            group-hover:scale-110
            transition-transform duration-200
          "/>
          <span className="
            absolute top-0 right-0
            w-2 h-2 bg-red-500 rounded-full
            ring-2 ring-gray-900
          "/>
        </button>
      </div>
  
      {/* Primary CTA */}
      <button 
        className="
          flex items-center justify-center
          bg-gradient-to-r from-cyan-600 to-blue-600
          hover:from-cyan-500 hover:to-blue-500
          text-white rounded-lg
          px-4 py-2 sm:px-5 sm:py-2
          text-sm font-medium
          shadow-lg shadow-cyan-500/20
          hover:shadow-cyan-500/30
          transition-all duration-200
          hover:scale-[1.02]
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-cyan-500/50
        "
        onClick={loginClick}
      >
        <FiLogIn className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">Log in</span>
      </button>
  
      {/* Mobile Menu Button */}
      <button 
        className="
          lg:hidden ml-1 p-2
          rounded-full hover:bg-gray-700/70
          transition-colors duration-200
        " 
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? (
          <FiX className="w-6 h-6 text-gray-300" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-300" />
        )}
      </button>
    </div>
  
    {/* Mobile Menu - Enhanced Design */}
    {mobileMenuOpen && (
      <div className="
        lg:hidden fixed top-[64px] left-0 right-0
        bg-gray-900/95 backdrop-blur-xl
        border-t border-gray-800
        z-50 max-h-[calc(100vh-64px)] overflow-y-auto
        animate-fadeIn
      ">
        <ul className="flex flex-col divide-y divide-gray-800/50">
          {['Buy crypto', 'Markets', 'Trade', 'Futures', 'Bots', 'Earn', 'Copy', 'Web3', 'Launchhub'].map((item) => (
            <li key={item} className="
              px-6 py-4 hover:bg-gray-800/30
              transition-colors duration-150
            ">
              <a className="
                flex items-center
                text-gray-300 hover:text-white
                font-medium
              ">
                {item}
                <FiChevronRight className="ml-auto opacity-70" />
              </a>
            </li>
          ))}
          
          {/* Mobile Action Buttons */}
          <div className="p-4 flex items-center justify-between border-t border-gray-800/50">
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70">
                <FiSearch className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </button>
              <button className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/70">
                <FiBell className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </button>
            </div>
            <button 
              className="
                bg-gradient-to-r from-cyan-600 to-blue-600
                text-white rounded-lg px-4 py-2
                text-sm font-medium
                hover:opacity-90
                transition-opacity duration-200
              "
              onClick={loginClick}
            >
              Log in
            </button>
          </div>
        </ul>
      </div>
    )}
  </nav>
  );
};

export default Navbar;