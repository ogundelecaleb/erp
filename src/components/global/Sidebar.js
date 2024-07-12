import React, { useEffect } from "react";
import { useState } from "react";
// import { motion as m } from "framer-motion";
import { Link, useOutletContext } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { GiVirtualMarker } from "react-icons/gi";
import {
  Ankr,
  ArrowDown2,
  ArrowUp2,
  Box2,
  Chart,
  Folder2,
  Home,
  Layer,
  Money2,
} from "iconsax-react";

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
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px] 
                ${
                  window.location.pathname === "/project" ||
                  window.location.pathname === "/projectdetails" ||
                  window.location.pathname === "/ganttchart" ||
                  window.location.pathname === "/bugreport" ||
                  window.location.pathname === "/projectanalytics" ||
                  window.location.pathname === "/projectreport" ||
                  window.location.pathname === "/projectsetup"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Folder2
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/project" ||
                      window.location.pathname === "/projectdetails" ||
                      window.location.pathname === "/ganttchart" ||
                      window.location.pathname === "/bugreport" ||
                      window.location.pathname === "/projectanalytics" ||
                      window.location.pathname === "/projectreport" ||
                      window.location.pathname === "/projectsetup"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  Projects
                </div>

                {isProject ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>

              {isProject && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/project"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/project" ||
                      window.location.pathname === "/projectdetails" ||
                      window.location.pathname === "/ganttchart" ||
                      window.location.pathname === "/bugreport"
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
                    to="/projectreport"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md    hover:bg-[#F7F9FC]   leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/projectreport"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Reports</li>
                  </Link>
                  <Link
                    to="/projectsetup"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185]  rounded-md    hover:bg-[#F7F9FC]   leading-[18px] md:leading-[24px]   ${
                      window.location.pathname === "/projectsetup"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">System setup</li>
                  </Link>
                </ul>
              )}

              {/*=====================>>>>> HRM */}
              <button
                to="/dashboard"
                onClick={() => setIsHrm(!isHrm)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  window.location.pathname === "/hrmanalytics" ||

                  window.location.pathname === "/companyanddocument" ||
                  window.location.pathname === "/employee/manageemployee" ||
                  window.location.pathname === "/employeesalary" ||
                  window.location.pathname === "/hradmin" ||
                  window.location.pathname === "/manageemployee" ||
                  window.location.pathname === "/manageemployeesalary" ||
                  window.location.pathname === "/hrmsetup" ||
                  window.location.pathname === "/employee/viewemployee" ||
                  window.location.pathname === "/employee/createemployee" ||
                  window.location.pathname === "/employee/editemployee" ||
                  window.location.pathname === "/employee/employeesalary" ||
                  window.location.pathname === "/employee/setemployeesalary" ||
                  window.location.pathname === "/employee/payslip" ||
                  window.location.pathname === "/employee/viewpayslip" ||
                  window.location.pathname === "/employee/attendance" ||
                  window.location.pathname === "/employee/manageleave" ||
                  window.location.pathname === "/hradmin/holidays" ||
                  window.location.pathname === "/hradmin/annoucement" ||
                  window.location.pathname === "/hradmin/termination" ||
                  window.location.pathname === "/hradmin/warning" ||
                  window.location.pathname === "/hradmin/compliant" ||
                  window.location.pathname === "/hradmin/promotion" ||
                  window.location.pathname === "hradmin/trip" ||
                  window.location.pathname === "/hradmin/resignation" ||
                  window.location.pathname === "/hradmin/transfer" ||
                  window.location.pathname === "/hradmin/award" ||
                  window.location.pathname === "/hrmreport"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Box2
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/hrmanalytics" ||

                      window.location.pathname === "/companyanddocument" ||
                      window.location.pathname === "/employee/manageemployee" ||
                      window.location.pathname === "/employeesalary" ||
                      window.location.pathname === "/hradmin" ||
                      window.location.pathname === "/manageemployee" ||
                      window.location.pathname === "/manageemployeesalary" ||
                      window.location.pathname === "/hrmsetup" ||
                      window.location.pathname === "/employee/viewemployee" ||
                      window.location.pathname === "/employee/createemployee" ||
                      window.location.pathname === "/employee/editemployee" ||
                      window.location.pathname === "/employee/employeesalary" ||
                      window.location.pathname === "/employee/setemployeesalary" ||
                      window.location.pathname === "/employee/payslip" ||
                      window.location.pathname === "/employee/viewpayslip" ||
                      window.location.pathname === "/employee/attendance" ||
                      window.location.pathname === "/employee/manageleave" ||
                      window.location.pathname === "/hradmin/holidays" ||
                      window.location.pathname === "/hradmin/annoucement" ||
                      window.location.pathname === "/hradmin/termination" ||
                      window.location.pathname === "/hradmin/warning" ||
                      window.location.pathname === "/hradmin/compliant" ||
                      window.location.pathname === "/hradmin/promotion" ||
                      window.location.pathname === "hradmin/trip" ||
                      window.location.pathname === "/hradmin/resignation" ||
                      window.location.pathname === "/hradmin/transfer" ||
                      window.location.pathname === "/hradmin/award" ||
                      window.location.pathname === "/hrmreport"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  HRM
                </div>

                {isHrm ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isHrm && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/employee/manageemployee"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/employee/manageemployee" ||
                      window.location.pathname === "/employeemanagement" ||
                      window.location.pathname === "/employee/viewemployee" ||
                      window.location.pathname === "/employee/createemployee" ||
                      window.location.pathname === "/employee/viewemployee" ||
                      window.location.pathname === "/employee/createemployee" ||
                      window.location.pathname === "/employee/editemployee" ||
                      window.location.pathname === "/employee/employeesalary" ||
                      window.location.pathname === "/employee/setemployeesalary" ||
                      window.location.pathname === "/employee/payslip" ||
                      window.location.pathname === "/employee/viewpayslip" ||
                      window.location.pathname === "/employee/attendance" ||
                      window.location.pathname === "/employee/manageleave" 
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Employee</li>
                  </Link>
                  <Link
                    to="/hradmin/award"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/hradmin/holidays" ||
                      window.location.pathname === "/hradmin/annoucement" ||
                      window.location.pathname === "/hradmin/termination" ||
                      window.location.pathname === "/hradmin/warning" ||
                      window.location.pathname === "/hradmin/compliant" ||
                      window.location.pathname === "/hradmin/promotion" ||
                      window.location.pathname === "hradmin/trip" ||
                      window.location.pathname === "/hradmin/resignation" ||
                      window.location.pathname === "/hradmin/transfer" ||
                      window.location.pathname === "/hradmin/award" ||
                     
                      window.location.pathname === "/hradmin" 
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">HR Admin</li>
                  </Link>
                  <Link
                    to="/companyanddocument"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/companyanddocument" 
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Company & Document</li>
                  </Link>
                  <Link
                    to="/hrmanalytics"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/hrmanalytics" 
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Analytics</li>
                  </Link>
                  <Link
                    to="/hrmreport"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/hrmreport" 
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Report</li>
                  </Link>
                  <Link
                    to="/hrmsetup"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/hrmsetup" 
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">System Setup</li>
                  </Link>
                </ul>
              )}

              {/*===================+>>> Crm */}

              <button
                onClick={() => setIsCrm(!isCrm)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px]
                ${
                  window.location.pathname === "/crmlead" ||
                  window.location.pathname === "/crmdeal" ||
                  window.location.pathname === "/crmanalytics" ||
                  window.location.pathname === "/crmreport" ||
                  window.location.pathname === "/crmsetup" ||
                  window.location.pathname === "/projectreport" ||
                  window.location.pathname === "/projectsetup"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Ankr
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/crmlead" ||
                      window.location.pathname === "/crmdeal" ||
                      window.location.pathname === "/crmanalytics" ||
                      window.location.pathname === "/crmreport" ||
                      window.location.pathname === "/crmsetup" ||
                      window.location.pathname === "/projectreport" ||
                      window.location.pathname === "/projectsetup"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  CRM
                </div>

                {isCrm ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isCrm && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/crmlead"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/crmlead" ||
                      window.location.pathname === "/projectdetails" ||
                      window.location.pathname === "/ganttchart" ||
                      window.location.pathname === "/bugreport"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Lead</li>
                  </Link>

                  <Link
                    to="/crmdeal"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/crmdeal"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Deal</li>
                  </Link>
                  <Link
                    to="/crmanalytics"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/crmanalytics"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Analytics</li>
                  </Link>

                  <Link
                    to="/crmreport"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md    hover:bg-[#F7F9FC]   leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/crmreport"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Reports</li>
                  </Link>
                  <Link
                    to="/crmsetup"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185]  rounded-md    hover:bg-[#F7F9FC]   leading-[18px] md:leading-[24px]   ${
                      window.location.pathname === "/crmsetup"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">System setup</li>
                  </Link>
                </ul>
              )}

              {/*==========================>>>>>>> Inventory */}
              <button
                onClick={() => setIsInventory(!isInventory)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  window.location.pathname === "/inventorymanagement" ||
                  window.location.pathname === "/productstock" ||
                  window.location.pathname === "/inventorysetup" ||
                  window.location.pathname === "/createitem" ||
                  window.location.pathname === "/itemdetails" ||
                  window.location.pathname === "/procurement" ||
                  window.location.pathname === "/createpurchase" ||
                  window.location.pathname === "/warehousestock" ||
                  window.location.pathname === "/purchasedetails" ||
                  window.location.pathname === "/warehouse" ||
                  window.location.pathname === "/edititem"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Layer
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/inventorymanagement" ||
                      window.location.pathname === "/productstock" ||
                      window.location.pathname === "/inventorysetup" ||
                      window.location.pathname === "/createitem" ||
                      window.location.pathname === "/itemdetails" ||
                      window.location.pathname === "/procurement" ||
                      window.location.pathname === "/createpurchase" ||
                      window.location.pathname === "/warehousestock" ||
                      window.location.pathname === "/purchasedetails" ||
                      window.location.pathname === "/warehouse" ||
                      window.location.pathname === "/edititem"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  Inventory
                </div>

                {isInventory ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isInventory && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/inventorymanagement"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/inventorymanagement" ||
                      window.location.pathname === "/createitem" ||
                      window.location.pathname === "/itemdetails"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Inventory Management</li>
                  </Link>

                  <Link
                    to="/productstock"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/productstock"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Product Stock</li>
                  </Link>
                  <Link
                    to="/procurement"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/procurement" ||
                      window.location.pathname === "/createpurchase" ||
                      window.location.pathname === "/warehousestock" ||
                      window.location.pathname === "/purchasedetails" ||
                      window.location.pathname === "/warehouse"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Procurement</li>
                  </Link>
                  <Link
                    to="/inventoryreport"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/inventoryreport"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Report</li>
                  </Link>
                  <Link
                    to="/inventorysetup"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/inventorysetup"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">System Setup</li>
                  </Link>
                </ul>
              )}

              {/* =====================>>>>>>User Management */}
              <button
                onClick={() => setIsUser(!isUser)}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  window.location.pathname === "/usermanagement" ||
                  window.location.pathname === "/loghistory" ||
                  window.location.pathname === "/role" ||
                  window.location.pathname === "/updatepermission"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Ankr
                    className="mr-[12px]"
                    variant={
                      window.location.pathname === "/usermanagement" ||
                      window.location.pathname === "/loghistory" ||
                      window.location.pathname === "/role" ||
                      window.location.pathname === "/updatepermission"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  User Management
                </div>

                {isUser ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>

              {isUser && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/usermanagement"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/usermanagement" ||
                      window.location.pathname === "/loghistory"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Users</li>
                  </Link>

                  <Link
                    to="/role"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/role" ||
                      window.location.pathname === "/updatepermission"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Role</li>
                  </Link>
                </ul>
              )}
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
