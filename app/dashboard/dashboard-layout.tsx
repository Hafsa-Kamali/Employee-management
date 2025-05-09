"use client";
import React from "react";
import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header/>
          <main className="w-full h-full overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
