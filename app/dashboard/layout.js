"use client"

import React from "react";
import Sidebar from "./_components/Sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

function DashboardLayout({ children }) {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  return (
    <div>
      <div className="md:w-64 h-screen fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <div className="p-10">{children}</div>
      </div>
      {isHomePage && ( 
        <div className="md:ml-64 mt-2 flex flex-col items-center justify-center">
          <div className="grid grid-cols-2 gap-2">
            <Image src="/images/home4.jpg" alt="home" width={180} height={160} />
            <Image src="/images/home1.jpg" alt="home" width={180} height={160} />
            <Image src="/images/home2.jpg" alt="home" width={180} height={160} />
            <Image src="/images/home3.jpg" alt="home" width={180} height={160} />
          </div>
          <h1 className="text-5xl mt-8 text-white font-bold">
            Welcome to My Portfolio!
          </h1>
          <p className="mt-4 text-2xl text-yellow-300">
            Explore my projects, skills, and more using the sidebar navigation.
          </p>
        </div>
      )}
    </div>
  );
}

export default DashboardLayout;
