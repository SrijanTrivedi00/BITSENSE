'use client';

import { FiSearch, FiBell, FiDownload, FiGlobe } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Left: Logo + Menu */}
      <div className="flex items-center space-x-6">
        <div className="text-cyan-400 text-2xl font-bold">BitSense</div>

        <ul className="hidden md:flex space-x-5 font-medium">
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
      <div className="flex items-center space-x-4">
        <button className="text-sm text-white hover:text-cyan-400">Log in</button>
        <button className="bg-white text-black rounded-md px-4 py-1 text-sm font-semibold hover:bg-gray-200">
          Sign up
        </button>

        <FiSearch className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        <FiBell className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        <FiDownload className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
        <FiGlobe className="w-5 h-5 hover:text-cyan-400 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
