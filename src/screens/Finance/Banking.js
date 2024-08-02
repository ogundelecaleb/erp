import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Banking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
    <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 overflow-auto">
      <ul className="flex-item items-center gap-[20px] md:gap-[32px]">
        {/* <button onClick={() => setState("Employee")}> */}
        <Link to="/banking/account">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${

              window.location.pathname === "/banking/account"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="cursor-pointer">
              <p className="">Account</p>
            </div>
          </li>
        </Link>
        {/* </button> */}
        {/* <button onClick={() => setState("Payroll")}> */}
       

        <Link to="/banking/chartofaccount">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/banking/chartofaccount"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Chart of Account</p>
            </div>
          </li>
        </Link>
        <Link to="/banking/transfer">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/banking/transfer"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Transfer</p>
            </div>
          </li>
        </Link>

       
      
      </ul>
    </div>
    <div className="px-[10px] md:px-[20px] ">
      <Outlet />

    </div>
  </div>
  )
}

export default Banking