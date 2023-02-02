import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12'>
      <Sidebar />
      <div className=' col-span-10'>
        <div className=' h-full max-w-7xl mx-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
