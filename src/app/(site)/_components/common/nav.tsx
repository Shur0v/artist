"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Bio", path: "/bio"},
  { label: "Poetry", path: "/poetry" },
  { label: "Event", path: "/event" },
  { label: "Art Gallery", path: "/art-gallery" },
  { label: "Login", path: "/login" },
];

export default function Nav() {
  const pathname = usePathname();

  return (


    <div className=" bg-color3 ">


    <div className="max-w-[1440px] mx-auto bg-color3 overflow-hidden">
    
        <div className=" h-[220px] w-full flex items-center overflow-hidden">
      <div className="container ">
        <div className="nav text-white flex justify-between">
          <div className="logo align-middle text-3xl font-extrabold">
            <div className="line relative">
              <div className="justify-start text-white text-[44px] font-normal font-playwrite leading-[57.20px] ">
                Rajaa
                <br />
                Gharbi
              </div>
              <div className="wraper h-12 w-[600px] bg-color2 flex justify-center items-center -rotate-45 absolute right-12 ">
                <div className="justify-center text-white text-[22px] font-normal font-playwrite leading-7 pl-96 ">
                  The Art of
                </div>
              </div>
            </div>
          </div>

          <div className="menu flex items-center">
            <div className="flex justify-center items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`p-3 flex justify-center items-center gap-2.5 ${
                      isActive ? "bg-[#ff6b00] rounded-[20px]" : ""
                    }`}
                  >
                    <div className="justify-start text-white text-base font-normal leading-tight">
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>



  );
}
