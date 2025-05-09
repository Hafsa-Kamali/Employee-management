"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { sidebarItems } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-full z-50 bg-[#0B0B0B] 
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="logo w-[40%]">
          <Image src="/images/logo.png" width={151} height={30} alt="logo" className="w-full h-auto" />
        </div>
        <button onClick={onClose} className="text-white text-2xl">
          <IoMdClose />
        </button>
      </div>

      <div className="px-6 py-4">
        <div className="border border-white/10 rounded-lg p-1 flex items-center justify-start bg-[#FFFFFF0A]">
          <div className="border border-white/10 rounded-xl flex items-center justify-center w-12 h-12 bg-[#ffffff0a] shrink-0">
            <Image
              src={"/images/dummy-image.png"}
              alt="Profile Picture"
              width={48}
              height={48}
              className="w-full h-full shrink-0"
            />
          </div>
          <div className="flex flex-col items-start px-4">
            <p className="text-base font-medium">Dave Bhids</p>
            <p className="text-sm text-white/50">bidy20@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex flex-col flex-1 justify-between pb-8 h-[calc(100%-8rem)]">
        <div className="px-4 py-4">
          <h6 className="text-xs font-medium text-white/40 mb-2">MENU</h6>
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`
                flex items-center gap-2 px-3 py-2 rounded-xl 
                hover:bg-white/10 

                ${
                  pathname === item.href
                    ? "border-black bg-[rgba(116,117,123,0.16)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                    : ""
                }
              `}
              >
                <Image src={item.icon} width={20} height={20} alt={item.label} />
                <p
                  className={`
                text-sm 
                ${pathname === item.href ? "text-white" : "text-white/50"}
              `}
                >
                  {item.label}
                </p>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto px-4 pb-6">
          <Link
            href="/dashboard/help"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10"
          >
            <Image src="/svgs/sidebar-icon-7.svg" width={20} height={20} alt="Help" />
            <p className="text-sm text-white/50">X Community</p>
          </Link>
          <Link
            href="/dashboard/settings"
            onClick={onClose}
            className="
            flex items-center gap-2 px-3 py-2 mt-3 
            rounded hover:bg-[#331010] 
            bg-logout-btn text-white/50
          "
          >
            <Image src="/svgs/logout-icon.svg" width={20} height={20} alt="Logout" />
            <p className="text-sm">Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
