"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className={` text-foreground shadow-lg relative transition-colors duration-300 
        border-b-2 p-2
      `}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full cursor-pointer"
            src="/profile.jpg"
            alt="Logo"
            width={100} // Smaller for mobile by default
            height={100}
            priority
            onClick={scrollToTop}
          />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden flex space-x-5">
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X
                  size={24}
                  color={`${theme === "dark" ? "white" : "black"}`}
                />
              ) : (
                <Menu
                  size={24}
                  color={`${theme === "dark" ? "white" : "black"}`}
                />
              )}
            </button>
          </div>

          <div className="flex items-center flex-col">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg transition-all cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={20} color="yellow" />
              ) : (
                <Moon size={20} color="black" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex md:space-x-10 lg:space-x-20 text-lg cursor-pointer font-bold">
          <div className="hover:underline">About Me</div>
          <div className="hover:underline">Experience</div>
          <div className="hover:underline">Projects</div>
          <div className="hover:underline">Playlists</div>
          <div className="hover:underline">Contact Me</div>
          <div className="flex items-center flex-col">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-white-500 dark:bg-gray-800 transition-all cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun size={20} color="yellow" />
              ) : (
                <Moon size={20} color="white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full  text-foreground flex flex-col items-center space-y-4 py-6 font-medium shadow-xl z-50 ${theme === "dark" ? "bg-gray-900 border-gray-700 " : "bg-white border-gray-400 "}`}
        >
          <div onClick={() => setIsOpen(false)}>About Me</div>
          <div onClick={() => setIsOpen(false)}>Experience</div>
          <div onClick={() => setIsOpen(false)}>Projects</div>
          <div onClick={() => setIsOpen(false)}>Playlists</div>
          <div onClick={() => setIsOpen(false)}>Contact Me</div>
        </div>
      )}
    </nav>
  );
}
