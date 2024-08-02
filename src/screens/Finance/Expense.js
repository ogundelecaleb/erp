import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Expense = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
    <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 overflow-auto">
      <ul className="flex-item items-center gap-[20px] md:gap-[32px]">
        {/* <button onClick={() => setState("Employee")}> */}
        <Link to="/expense/bill">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${

              window.location.pathname === "/expense/bill"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="cursor-pointer">
              <p className="">Bill</p>
            </div>
          </li>
        </Link>
        {/* </button> */}
        {/* <button onClick={() => setState("Payroll")}> */}
       

        <Link to="/expense/payment">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/expense/payment"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Payment</p>
            </div>
          </li>
        </Link>
        <Link to="/expense/debitnote">
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
             
              window.location.pathname === "/expense/debitnote"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <div className="">
              <p className="">Debit Notes</p>
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

export default Expense