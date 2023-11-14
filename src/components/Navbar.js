import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 bg-white w-full z-50">
      <header className="flex justify-between h-20 items-center py-3 px-10">
        <div className=""><Image width={50} height={50} alt="" src="/ahead-logo.png" /></div>
        <div className="">
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer font-semibold text-base transition duration-300 hover:text-gray-700 hover:font-bold">
              Emotions
            </li>
            <li className="cursor-pointer font-semibold text-base transition duration-300 hover:text-gray-700 hover:font-bold">
              Manifesto
            </li>
            <li className="cursor-pointer font-semibold text-base transition duration-300 hover:text-gray-700 hover:font-bold">
              Self-awareness test
            </li>
            <li className="cursor-pointer font-semibold text-base transition duration-300 hover:text-gray-700 hover:font-bold">
              Work with us
            </li>
          </ul>
        </div>
        <div className="">
          <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold transition duration-300 hover:bg-gray-800">
            Download App
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
