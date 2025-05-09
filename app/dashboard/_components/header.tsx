"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-navbar";
import { FaGreaterThan } from "react-icons/fa";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="border-b-[1px] border-white/10 w-full relative">
      {/* Desktop View */}
      <div className="h-[5rem] py-6 items-center justify-between px-8 hidden md:flex">
        <div className="flex items-center gap-3">
          <Image src="/svgs/header-home-icon.svg" alt="Profile" width={20} height={20} />
          <FaGreaterThan className="size-3 text-white/40" />
          <p className="text-sm text-white/50">Dashboard</p>
          <FaGreaterThan className="size-3 text-white/40" />
          <p className="text-sm">{pathname.split("/").pop()}</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/svgs/notification-icon.svg" alt="Notifications" width={36} height={36} />

          <div className="border border-white/10 rounded-lg p-1 flex items-center justify-center bg-[#FFFFFF0A]">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10">
              <Image src="/svgs/profile-placeholder.svg" alt="Profile" width={24} height={24} />
            </div>
            <div className="flex flex-col items-start px-4">
              <p className="text-sm font-medium">Dave Bhids</p>
              <p className="text-xs text-white/50">bidy20@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex items-center justify-between md:hidden pr-2">
        <div className="logo w-[40%]">
          <Image src="/images/logo.png" width={151} height={30} alt="logo" className="w-full h-auto" />
        </div>
        <button onClick={toggleMobileNav} className="focus:outline-none">
          <Image src="/svgs/menu.svg" width={40} height={40} alt="nav-icon" className="w-10 h-10 mt-2" />
        </button>
      </div>

      {/* Mobile Navbar */}
      <MobileMenu isOpen={isMobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
};

export default Header;
