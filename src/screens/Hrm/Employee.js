import React, { useState } from "react";
import ManageEmployee from "./ManageEmployee";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Employee = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState("Employee");
  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <div className="px-[10px] md:px-[16px] xl:px-[20px] pt-[16px] md:pt-[18px] bg-white border border-[#98A2B38F]/50 ">
        <ul className="flex items-center gap-[20px] md:gap-[32px]">
          {/* <button onClick={() => setState("Employee")}> */}
          <Link to="/employee/manageemployee">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
                window.location.pathname === "/employee/manageemployee" ||
                window.location.pathname === "/employee/editemployee" ||
                window.location.pathname === "/employee/createemployee" ||
                window.location.pathname === "/employee/viewemployee" ||
                window.location.pathname === "/employee"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="cursor-pointer">
                <p className="">Manage Employee</p>
              </div>
            </li>
          </Link>
          {/* </button> */}
          {/* <button onClick={() => setState("Payroll")}> */}
          <li
            className={`py-[18px] cursor-pointer text-[14px] ${
              window.location.pathname === "/employee/setemployeesalary" ||
              window.location.pathname === "/employee/payslip" ||
              window.location.pathname === "/employee/viewpayslip" ||
              window.location.pathname === "/employee/employeesalary"
                ? "font-medium text-[#000] border-b-[2.4px]"
                : "font-normal text-[#667185]"
            }  flex items-center justify-between border-b-[#F05800]`}
          >
            <Menu>
              <MenuButton bg={"none"}>
                <div className="cursor-pointer">
                  <p className="">Payroll</p>
                </div>
              </MenuButton>
              <MenuList maxW="32" className="">
                <MenuItem
                  onClick={() =>
                    navigate("/employee/employeesalary", {
                      //   state: result,
                    })
                  }
                  w="full"
                  color="#718096"
                  mb="10px"
                >
                  <div>
                    <p className="text-[12px] md:text-[14px] text-[#3c4759]  font-medium leading-[18px] md:leading-[20px] mb-2">
                      Employee Salary
                    </p>
                    <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                      View and set employee salary
                    </p>
                  </div>
                </MenuItem>

                <MenuItem
                  onClick={() =>
                    navigate("/employee/payslip", {
                      //   state: result,
                    })
                  }
                  w="full"
                  color="#bf0d0d"
                  mb="10px"
                >
                  <div>
                    <p className="text-[12px] md:text-[14px] text-[#3c4759]  font-medium leading-[18px] md:leading-[20px] mb-2">
                      Payslip
                    </p>
                    <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                      Manage emeployee's payslip
                    </p>
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          {/* </button> */}
          <Link to="/employee/attendance">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/employee/attendance"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Attendance</p>
              </div>
            </li>
          </Link>

          <Link to="/employee/manageleave">
            <li
              className={`py-[18px] cursor-pointer text-[14px] ${
               
                window.location.pathname === "/employee/manageleave"
                  ? "font-medium text-[#000] border-b-[2.4px]"
                  : "font-normal text-[#667185]"
              }  flex items-center justify-between border-b-[#F05800]`}
            >
              <div className="">
                <p className="">Manage Leave</p>
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

export default Employee;
