import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const FinanceReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
    <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 overflow-auto">
      <ul className="flex-item items-center gap-[20px] md:gap-[32px]">
        {/* <button onClick={() => setState("Employee")}> */}
        <Link to="/financereport/incomesummary">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${

              window.location.pathname === "/financereport/incomesummary"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="cursor-pointer">
              <p className="">Income summary</p>
            </div>
          </li>
        </Link>
        {/* </button> */}
        {/* <button onClick={() => setState("Payroll")}> */}
       

        <Link to="/financereport/expensesummary">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/financereport/expensesummary"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Expense summary</p>
            </div>
          </li>
        </Link>
        <Link to="/financereport/taxsummary">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/financereport/taxsummary"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Tax summary</p>
            </div>
          </li>
        </Link>
        <Link to="/financereport/cashflow">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/financereport/cashflow"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Cashflow</p>
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

export default FinanceReport