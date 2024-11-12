import { Metadata } from "next";
import SideNav from "../ui/dashboard/sidenav";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Welcome to Acme",
};

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default layout;