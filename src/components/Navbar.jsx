import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-100 border-b border-neutral-300">
      <div className="max-w-[1700px] mx-auto navbar flex items-center justify-between px-4 sm:px-8 md:px-12 py-5 sm:py-8 md:py-6">
        <div className="navbar-start">
          <img
            className="w-[242.4px] h-[32px] sm:w-[260px] sm:h-[40px]"
            src="/assets/images/logo.svg"
            alt="logo"
          />
        </div>

        <div className="navbar-center hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative pb-0.5 font-semibold text-[18px] leading-[150%] 
               after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
               focus-visible:border-1.5 focus-visible:border-neutral-900 focus-visible:rounded-[5px]
               after:h-[3px] after:w-[50px] after:rounded-md after:transition-all 
               ${
                 isActive ? "after:bg-orange-500" : "hover:after:bg-orange-500"
               }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-0.5 font-semibold text-[18px] leading-[150%] 
               after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
               focus-visible:border-1.5 focus-visible:border-neutral-900 focus-visible:rounded-[5px]
               after:h-[3px] after:w-[52px] after:rounded-md after:transition-all 
               ${
                 isActive ? "after:bg-orange-500" : "hover:after:bg-orange-500"
               }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              `relative pb-0.5 font-semibold text-[18px] leading-[150%] 
               after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
               focus-visible:border-1.5 focus-visible:border-neutral-900 focus-visible:rounded-[5px]
               after:h-[3px] after:w-[64px] after:rounded-md after:transition-all 
               ${
                 isActive ? "after:bg-orange-500" : "hover:after:bg-orange-500"
               }`
            }
          >
            Recipes
          </NavLink>
        </div>

        <div className="navbar-end hidden md:flex">
          <Link to="/recipes">
            <button
              className="w-[167px] h-[52px] rounded-[10px] bg-neutral-900 
             hover:bg-neutral-800 hover:transition-normal 
             text-white font-bold leading-[140%] text-[19px] px-4 py-3
              focus-visible:outline-[2px] focus-visible:outline-neutral-900 focus-visible:outline-offset-3"
            >
              Browse recipes
            </button>
          </Link>
        </div>

        <div className="md:hidden navbar-end">
          <button
            className="bg-neutral-300 w-10 h-10 px-[11px] py-3 rounded-[4px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img
              src="/assets/images/icon-hamburger-menu.svg"
              alt="menu"
              className="w-[18px] h-[16px]"
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-[72px] sm:top-[92px] left-0 right-0 z-50 flex flex-col items-start px-[8px] py-[8px] gap-6 bg-white shadow-md mx-[16px] sm:mx-8 rounded-[8px]">
          <NavLink
            to="/"
            className="font-semibold text-[18px] leading-[150%] mt-1.5 mx-[8px]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="font-semibold text-[18px] leading-[150%] mx-[8px]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/recipes"
            className="font-semibold text-[18px] leading-[150%] mx-[8px]"
            onClick={() => setMenuOpen(false)}
          >
            Recipes
          </NavLink>
          <button className="w-full h-[52px] rounded-[10px] bg-neutral-900 hover:bg-neutral-800 hover:transition-normal text-white font-bold leading-[140%] text-[19px] px-4 py-3">
            Browse recipes
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
