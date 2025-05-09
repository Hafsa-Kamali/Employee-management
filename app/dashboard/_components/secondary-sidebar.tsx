"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const secondarySidebarItems = [
  { label: "My Profile", href: "/dashboard/profile-settings" },
  { label: "Security", href: "/dashboard/security" },
  { label: "Authentication", href: "/dashboard/authentication" },
];

const SecondarySidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full max-w-48 h-full flex-col pt-6  hidden md:flex">
      <nav className="flex flex-col gap-4 w-[80%] mx-auto">
        {secondarySidebarItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-4 rounded-lg py-2 hover:bg-white/10 ${
              pathname === item.href
                ? "border-black bg-[rgba(116,117,123,0.16)] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                : ""
            }`}
          >
            <p className={`text-sm ${pathname === item.href ? "text-white" : "text-white/40"}`}>{item.label}</p>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SecondarySidebar;
