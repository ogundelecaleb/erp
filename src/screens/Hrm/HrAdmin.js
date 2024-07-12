import React, { useState } from "react";
import ManageEmployee from "./ManageEmployee";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const HrAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 overflow-auto">
        <ul className="flex-between items-center gap-[20px] md:gap-[32px]">
          {/* <button onClick={() => setState("Employee")}> */}
          <Link to="/hradmin/award">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${

                window.location.pathname === "/hradmin/award"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="cursor-pointer">
                <p className="">Award</p>
              </div>
            </li>
          </Link>
          {/* </button> */}
          {/* <button onClick={() => setState("Payroll")}> */}
         

          <Link to="/hradmin/transfer">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/transfer"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Transfer</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/resignation">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/resignation"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Resignation</p>
              </div>
            </li>
          </Link>

          <Link to="/hradmin/trip">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/trip"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Trip</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/promotion">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/promotion"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">promotion</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/compliant">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/compliant"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Compliants</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/warning">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/warning"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Warning</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/termination">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/termination"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Termination</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/annoucement">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/annoucement"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Annoucement</p>
              </div>
            </li>
          </Link>
          <Link to="/hradmin/holidays">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/hradmin/holidays"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Holidays</p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="px-[10px] md:px-[20px] ">
        <Outlet />

      </div>
    </div>
  );
};

export default HrAdmin;
