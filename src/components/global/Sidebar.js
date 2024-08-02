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
  MessageText,
  Money2,
} from "iconsax-react";

const Sidebar = ({ isSidebarOpen, onClose, role }) => {
  const router = useLocation();
  // let userData = localStorage.getItem("userData")
  const [token, setToken] = useState(null);
  const [subUserPermission, setSubUserPermission] = useState(true);

  const [settings, setSettings] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [isActive, setIsActive] = useState("project")
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
                onClick={() => setIsActive("project")}
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

                {isActive === "project" ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>

              {isActive === "project" && (
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
                onClick={() => setIsActive("hrm")}
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
                  window.location.pathname === "/companyanddocument/document" ||
                  window.location.pathname === "/companyanddocument/companypolicy" ||
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
                      window.location.pathname === "/companyanddocument/document" ||
                      window.location.pathname === "/companyanddocument/companypolicy" ||
                      window.location.pathname === "hrmreport/monthlyattendance"  ||
                      window.location.pathname === "/hrmreport/leave"  ||
                    
                      window.location.pathname === "/hrmreport/payroll"  || 
                      window.location.pathname === "/hrmreport"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  HRM
                </div>

                {isActive === "hrm" ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isActive === "hrm" && (
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
                    to="/companyanddocument/companypolicy"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      
                      window.location.pathname === "/companyanddocument/document" ||
                      window.location.pathname === "/companyanddocument/companypolicy" ||
                      
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
                    to="hrmreport/monthlyattendance"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "hrmreport/monthlyattendance"  ||
                      window.location.pathname === "/hrmreport/leave"  ||
                      window.location.pathname === "/hrmreport"  ||
                      window.location.pathname === "/hrmreport/payroll"  

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
                onClick={() => setIsActive("crm")}
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

                {isActive === "crm" ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isActive === "crm" && (
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
                onClick={() => setIsActive("inventory")}
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

                {isActive === "inventory" ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isActive === "inventory" && (
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
                onClick={() => setIsActive("user")}
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

                {isActive === "user" ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>

              {isActive === "user" && (
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

            <button
                onClick={() => setIsActive("finance")}
                className={` py-[10px] pl-[16px] flex items-center  justify-between w-full text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                  window.location.pathname ===  "/vendor" ||
                  window.location.pathname === "/income"  ||
                  window.location.pathname === "/financereport" ||
                  window.location.pathname ===  "/financeanalytics" ||
                  window.location.pathname === "/banking"  ||
                  window.location.pathname === "/expense"  ||
                  window.location.pathname === "/customers" ||
                  window.location.pathname === "/customers/viewproposals" ||
                  window.location.pathname === "/customers/editproposals" ||
                  window.location.pathname === "/banking/transfer" ||
                  window.location.pathname === "/banking/chartofaccount" ||
                  window.location.pathname === "/banking/account" ||
                  window.location.pathname === "/customers/viewinvoice" ||
                  window.location.pathname === "/income/creitnote" ||
                  window.location.pathname === "/income/revenue" ||
                  window.location.pathname === "/expense/payment" ||
                  window.location.pathname === "/expense/debitnote" ||
                  window.location.pathname === "/expense/bill" ||
                  window.location.pathname === "/viewcustomers"
                    ? "text-[#F05800] font-medium rounded-md"
                    : "text-[#667185] font-normal"
                }`}
              >
                <div className="flex items-center">
                  {" "}
                  <Money2
                    className="mr-[12px]"
                    variant={
                      window.location.pathname ===  "/vendor" ||
                      window.location.pathname === "/income"  ||
                      window.location.pathname === "/financereport" ||
                      window.location.pathname ===  "/financeanalytics" ||
                      window.location.pathname === "/banking"  ||
                      window.location.pathname === "/expense"  ||
                      window.location.pathname === "/customers" ||
                      window.location.pathname === "/customers/viewproposals" ||
                      window.location.pathname === "/customers/editproposals" ||
                      window.location.pathname === "/customers/viewinvoice" ||
                       window.location.pathname === "/banking/transfer" ||
                      window.location.pathname === "/banking/chartofaccount" ||
                      window.location.pathname === "/banking/account" ||
                      window.location.pathname === "/income/creitnote" ||
                      window.location.pathname === "/income/revenue" ||
                      window.location.pathname === "/expense/payment" ||
                      window.location.pathname === "/expense/debitnote" ||
                      window.location.pathname === "/expense/bill" ||
                      window.location.pathname === "/viewcustomers"
                        ? "Bold"
                        : "Linear"
                    }
                  />
                  Finance && Acc
                </div>

                {isActive === "finance" ? (
                  <ArrowUp2 size="14" variant="Linear" color="#667185" />
                ) : (
                  <ArrowDown2 size="14" variant="Linear" color="#667185" />
                )}
              </button>
              {isActive === "finance" && (
                <ul className="ml-[26px] pl-[12px] py-[14px] border-l border-[#98A2B3]/50">
                  <Link
                    to="/customers"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]    leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/customers" ||
                      window.location.pathname === "/customers/viewproposals" ||
                      window.location.pathname === "/customers/viewinvoice" ||
                      window.location.pathname === "/customers/editproposals" ||

                      window.location.pathname === "/viewcustomers"
                        ? "bg-[#F7F9FC] font-medium "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Customer</li>
                  </Link>

                  <Link
                    to="/vendor"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/vendor" ||
                      window.location.pathname === "/vendor"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Vendor</li>
                  </Link>
                  <Link
                    to="/banking/account"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/banking" ||
                      window.location.pathname === "/banking/transfer" ||
                      window.location.pathname === "/banking/chartofaccount" ||
                      window.location.pathname === "/banking/account" ||
                      window.location.pathname === "/banking"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Banking</li>
                  </Link>
                  <Link
                    to="/income/revenue"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/income" ||
                      window.location.pathname === "/income/creitnote" ||
                      window.location.pathname === "/income/revenue" ||
                      window.location.pathname === "/income"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Income</li>
                  </Link>
                  <Link
                    to="/expense/bill"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/expense" ||
                      window.location.pathname === "/expense/payment" ||
                      window.location.pathname === "/expense/debitnote" ||
                      window.location.pathname === "/expense/bill"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Expense</li>
                  </Link>
                  <Link
                    to="/financeanalytics"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/financeanalytics" ||
                      window.location.pathname === "/financeanalytics"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Analytics</li>
                  </Link>
                  <Link
                    to="/financereport"
                    className={` py-[6px] pl-[12px] flex items-center text-[12px]  text-[#667185] rounded-md  hover:bg-[#F7F9FC]  leading-[18px] md:leading-[24px]  mb-[14px] ${
                      window.location.pathname === "/financereport" ||
                      window.location.pathname === "/financereport"
                        ? "bg-[#F7F9FC] font-medium  "
                        : " font-normal"
                    }`}
                  >
                    <li className="">Report</li>
                  </Link>
                 
                </ul>
              )}

           

            {/* Analytics */}
            <Link
              to="/analytics"
              className={` py-[10px] pl-[16px] flex items-center text-[14px]    leading-[20px] md:leading-[24px]  mt-[20px] ${
                window.location.pathname === "/analytics"
                  ? "text-[#F05800] font-medium rounded-md"
                  : "text-[#667185] font-normal"
              }`}
            >
              <MessageText
                className="mr-[12px]"
                variant={
                  window.location.pathname === "/analytics" ? "Bold" : "Linear"
                }
              />
              Communication
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
