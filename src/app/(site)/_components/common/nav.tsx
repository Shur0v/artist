"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Fine Art Portfolio", path: "/art" },
  { label: "Poetry", path: "/poetry" },
  { label: "Artist Statement", path: "/about" },
  { label: "Biography", path: "/bio" },
  { label: "Reviews", path: "/event" },
  { label: "Contact", path: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-color3">
      <div className="max-w-[1440px] mx-auto bg-color3 overflow-hidden">
        <div className="h-[220px] md:h-[220px] w-full flex items-center overflow-hidden">
          <div className="container mx-auto px-4 w-full">
            <div className="nav text-white flex justify-between items-center relative w-full">
              <div className="logo align-middle text-3xl font-extrabold">
                <div className="wraper md:block hidden ">
                  <div className="wraper shadow-lg h-12 w-[600px] bg-color2  flex justify-center items-center -rotate-45 absolute -left-100  top-0">
                    <div className="justify-center text-white text-[22px] font-bold font-playwrite leading-7 pl-30 shadow-xl">
                      The Art of
                    </div>
                  </div>
                </div>
              </div>

              {/* Hamburger Menu Button */}
              <button
                className="md:hidden p-2 text-white z-50"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop Menu */}
              <div className="menu hidden md:flex items-center flex-1 justify-end">
                <div className="flex justify-end items-center flex-wrap gap-2 ">
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`p-3 flex justify-center items-center gap-2.5 hover:bg-color2 hover:rounded-[20px] transition-all ${
                          isActive ? "bg-color2 rounded-[20px]" : ""
                        }`}
                      >
                        <div
                          className={`${
                            isActive ? "text-white" : "text-white"
                          } text-base font-normal leading-tight whitespace-nowrap`}
                        >
                          {item.label}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Menu Overlay */}
              {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-color3 md:hidden z-40 pt-[220px]">
                  <div className="flex flex-col items-center">
                    {navItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`p-4 w-full text-center hover:bg-color2 transition-all ${
                            isActive ? "bg-color2" : ""
                          }`}
                        >
                          <div
                            className={`${
                              isActive ? "text-white" : "text-white"
                            } text-base font-normal leading-tight`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
