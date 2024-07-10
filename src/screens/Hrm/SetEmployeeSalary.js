import React, { useState } from "react";

import ModalLeft from "../../components/ModalLeft";
import TaskTab from "../../components/project/TaskTab";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import PersonalDetails from "../../components/hrm/PersonalDetails";
import CompanyDetails from "../../components/hrm/CompanyDetails.js";
import ViewPersonalDetails from "../../components/hrm/ViewPersonalDetails.js";
import ViewCompanyDetails from "../../components/hrm/ViewCompanyDetails.js";
import ViewPayslipDetails from "../../components/hrm/ViewPayslipDetails.js";
import BasicSalary from "../../components/hrm/BasicSalary.js";
import Allowance from "../../components/hrm/Allowance.js";
import Loan from "../../components/hrm/Loan.js";
import Commission from "../../components/hrm/Commission.js";
import SaturationDeduction from "../../components/hrm/SaturationDeduction.js";

const SetEmployeeSalary = () => {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);

  const toggleCreateModal = () => {
    setIsCreateModal(!isCreateModal);
  };

  const closeCreateModal = () => {
    setIsCreateModal(false);
  };

  const toggleImportModal = () => {
    setIsOpenImportModal(!isOpenImportModal);
  };
  const closeImportModal = () => {
    setIsOpenImportModal(false);
  };

  return (
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-tr-[8px] rounded-tl-[8px]  overflow-hidden h-full w-full bg-[#ffff]  ">
        <div className=" p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                HRM /
              </p>
              <Link to="/employee">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Employee /{" "}
                </p>
              </Link>
              <Link to="/employee/employeesalary">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Payroll /{" "}
                </p>
              </Link>
              <Link to="/employee/employeesalary">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Employee Salary /{" "}
                </p>
              </Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Set Employee Salary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[16px] "></div>
        </div>
      </div>
      <div className=" w-full overflow-hidden bg-[#fff] p-[10px] border-l-[0.2px] border-b-[0.2px] border-r-[0.2px] border-[#98a2b3] rounded-br-[8px] rounded-bl-[8px]  md:p-[20px] ">
        <BasicSalary />
        <Allowance />
        <Loan />
        <Commission />
        <SaturationDeduction/>
      </div>
    </div>
  );
};

export default SetEmployeeSalary;
