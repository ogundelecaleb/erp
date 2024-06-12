import React, { useEffect } from "react";
import { useState } from "react";
// import { motion as m } from "framer-motion";
import { Link, useOutletContext } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { MdOutlineContactSupport, MdReceiptLong } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TbFileInvoice } from "react-icons/tb";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { GiVirtualMarker } from "react-icons/gi";
import { Ankr, ArrowDown2, ArrowUp2, Box2, Chart, Home, Layer, Money2 } from "iconsax-react";

const Sidebar = ({ isSidebarOpen, onClose, role }) => {
  const router = useLocation();
  // let userData = localStorage.getItem("userData")
  const [token, setToken] = useState(null);
  const [subUserPermission, setSubUserPermission] = useState(true);

  const [settings, setSettings] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isHrm, setIsHrm] = useState(false);
  const [isCrm, setIsCrm] = useState(false);
  const [isInventory, setIsInventory] = useState(false);
  const [isUser, setIsUser] = useState(false);
  

  return (
    <div
      className={` lg:block lg:relative ${
        isSidebarOpen ? "block z-20 fixed inset-0 transition-opacity" : "hidden"
      }`}
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#29292980]  transition-opacity lg:relative"
      ></div>
      <div class="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
        <button
          onClick={onClose}
          type="button"
          class="rounded-md text-gray-700 hover:text-[white] focus:outline-none focus:ring-2 focus:ring-[white]"
        >
          <span class="sr-only">Close panel</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="max-w-[260px] min-h-screen bg-[#FFFFFF] w-[260px]  p-[16px] md:p-[20px] sticky top-0  ">
        <div className="relative">
          <div className="relative min-h-screen overflow-y-visible">
            <img
              class=" h-[40px] w-[88px]   mb-[20px]"
              src="./assets/gtLogo.png"
              alt="logo"
            />

            <Link
              to="/overview"
              className={` py-[10px] pl-[16px] flex items-center text-[14px]    leading-[20px] md:leading-[24px] ${
                window.location.pathname === "/overview"
                  ? "text-[#F05800] font-medium rounded-md"
                  : "text-[#667185] font-normal"
              }`}
            >
              <Home
                className="mr-[12px]"
                variant={
                  window.location.pathname === "/overview" ? "Bold" : "Linear"
                }
              />
              Overview
            </Link>

            <div className="mt-[20px] border-t border-b border-[#98A2B3]/50 w-full py-[20px]">
              <button
               
                onClick={() => setIsProject(!isProject)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px] ${
                  window.location.pathname === "/project"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Home
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/project"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  Projects
                </div>

                {isProject ?  <ArrowUp2  size="14" variant="Linear" color="#667185"/> : <ArrowDown2  size="14" variant="Linear" color="#667185"/>}

               
              </button>

              {isProject && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/project"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/project"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Projects</li>
                  </Link>

                  <Link
                    to="/projectanalytics"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/projectanalytics"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Analytics</li>
                  </Link>

                  <Link
                    to="/report"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md    hover:bg-[#F7F9FC]   leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/projectreport"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Reports</li>
                  </Link>
                  <Link
                    to="/systemsetup"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185]  rounded-md    hover:bg-[#F7F9FC]   leading-[18px] md:leading-[24px]   ${
                      window.location.pathname === "/systemsetup"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">System setup</li>
                  </Link>
                </ul>
              )}

              {/* HRM */}
              <button
                to="/dashboard"
                onClick={() => setIsHrm(!isHrm)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  isHrm
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Box2
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/hrm"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  HRM
                </div>

                {isHrm ?  <ArrowUp2  size="14" variant="Linear" color="#667185"/> : <ArrowDown2  size="14" variant="Linear" color="#667185"/>}

               
              </button>



              {/* Crm */}

              
              <button
                
                onClick={() => setIsCrm(!isCrm)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  isHrm
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Ankr
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/crm"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  CRM
                </div>

                {isCrm ?  <ArrowUp2  size="14" variant="Linear" color="#667185"/> : <ArrowDown2  size="14" variant="Linear" color="#667185"/>}

               
              </button>




              {/* Inventory */}
              <button
                
                onClick={() => setIsInventory(!isInventory)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  isInventory
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Layer
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/inventory"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  Inventory
                </div>

                {isInventory ?  <ArrowUp2  size="14" variant="Linear" color="#667185"/> : <ArrowDown2  size="14" variant="Linear" color="#667185"/>}

               
              </button>


              {/* User Management */}
              <button
                
                onClick={() => setIsUser(!isUser)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  isUser
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Ankr
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/usermanagement"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                User Management
                </div>

                {isUser ?  <ArrowUp2  size="14" variant="Linear" color="#667185"/> : <ArrowDown2  size="14" variant="Linear" color="#667185"/>}

               
              </button>
            </div>



            <Link
              to="/finance"
              className={` py-[10px] pl-[16px] flex items-center text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                window.location.pathname === "/finance"
                  ? "text-[#F05800] font-medium rounded-md"
                  : "text-[#667185] font-normal"
              }`}
            >
              <Money2
                className="mr-[12px]"
                variant={
                  window.location.pathname === "/finance" ? "Bold" : "Linear"
                }
              />
            Finance
            </Link>


            {/* Analytics */}
            <Link
              to="/analytics"
              className={` py-[10px] pl-[16px] flex items-center text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                window.location.pathname === "/analytics"
                  ? "text-[#F05800] font-medium rounded-md"
                  : "text-[#667185] font-normal"
              }`}
            >
              <Chart
                className="mr-[12px]"
                variant={
                  window.location.pathname === "/analytics" ? "Bold" : "Linear"
                }
              />
            Analytics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
