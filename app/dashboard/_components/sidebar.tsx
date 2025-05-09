// src/app/dashboard/components/Sidebar.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "./constants";

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-60 h-screen flex-col items-center border border-white/10 hidden md:flex">
      <div className="h-full w-full flex flex-col">
        <div className="h-[5rem] border-b-[1px] border-white/10">
          <div className="w-[65%] pt-2">
            <Image src="/images/logo.png" width={151} height={30} alt="logo" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between pb-8">
          <nav className="flex flex-col gap-4 pt-6">
            <h6 className="text-xs font-medium text-white/40 pl-4">Menu</h6>
            {sidebarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-2  hover:bg-white/10 ${
                  pathname === item.href
                    ? "border-black bg-[rgba(116,117,123,0.16)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                    : ""
                }`}
              >
                <Image src={item.icon} width={20} height={20} alt={item.label} />
                <p className={`text-sm ${pathname === item.href ? "text-white" : "text-white/40"}`}>{item.label}</p>
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2 w-full">
            <Link
              href="/dashboard/help"
              className="flex items-center gap-4 px-4 py-2 hover:bg-white/10 rounded-lg mx-4"
            >
              <Image src="/svgs/sidebar-icon-7.svg" width={20} height={20} alt="Help" />
              <p className="text-sm text-white/40">X Community</p>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-4 px-4 py-2 bg-logout-btn mx-4 hover:text-white rounded-lg text-white/40"
            >
              <Image src="/svgs/logout-icon.svg" width={20} height={20} alt="Settings" />
              <p className="text-sm ">Log out</p>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
