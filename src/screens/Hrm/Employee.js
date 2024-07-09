import React, { useState } from "react";
import ManageEmployee from "./ManageEmployee";
import { Outlet } from "react-router-dom";

const Employee = () => {
  const [state, setState] = useState("Employee");
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 ">
        <ul className="flex items-center gap-[20px] md:gap-[32px]">
          <button onClick={() => setState("Employee")}>
            <li
              className={`py-[10px] text-[14px] ${
                state === "Employee"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Manage Employee</p>
              </div>
            </li>
          </button>
          <button onClick={() => setState("Payroll")}>
            <li
              className={`py-[10px] text-[14px] ${
                state === "Payroll"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Payrol</p>
              </div>
            </li>
          </button>
          <button onClick={() => setState("Attendance")}>
            <li
              className={`py-[10px] text-[14px] ${
                state === "Attendance"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Attendance</p>
              </div>
            </li>
          </button>

          <button onClick={() => setState("Leave")}>
            <li
              className={`py-[10px] text-[14px] ${
                state === "Leave"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Manage Leave</p>
              </div>
            </li>
          </button>
        </ul>
      </div>
      <div className="px-[10px] md:px-[20px] ">
        <Outlet/>

        {/* {state === "Employee" && (<ManageEmployee/>)} */}
      </div>
    </div>
  );
};

export default Employee;
