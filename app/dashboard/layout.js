import React from "react";
import Sidebar from "./_components/Sidebar";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="md:w-64 h-screen fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
