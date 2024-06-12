import React, { useContext,useState, Suspense, useEffect, lazy } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";

import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import Projects from "../screens/Project/Projects";
import Topbar from "../components/global/Topbar";
import Sidebar from "../components/global/Sidebar";


function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const [isSidebar, setIsSidebar] = useState(true);

  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [closeSidebar, location]);

  const toggleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const handleSideBarClose = () => {
    setIsSidebar(false);
  };

  return (
    <div id="popup-root" className="app bg-[#ffffff] flex ">

      <Sidebar isSidebarOpen={isSidebar} onClose={handleSideBarClose}  />

      <div className="flex flex-col flex-1 w-full">
        <Topbar setIsSidebar={toggleSidebar}/>
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            
            <Outlet/>
            </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
