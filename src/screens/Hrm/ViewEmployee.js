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

const ViewEmployee = () => {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [state, setState] = useState("personal");

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
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                HRM /
              </p>
              <Link to="/emeployee">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Employee /
                </p>
              </Link>
              <Link to="/employee/manageemployee">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Manage Employee /
                </p>
              </Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; View Employee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[16px] ">
            <ul className="p-[4px] md:p-[6px] bg-[#F7F9FC] rounded-md flex items center border-[0.2px] border-[#D0D5DD]  ">
              <li
                onClick={() => setState("personal")}
                className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                  state === "personal"
                    ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                    : ""
                }`}
              >
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Personal Details
                </p>
              </li>
              <li
                onClick={() => setState("company")}
                className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                  state === "company"
                    ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                    : ""
                }`}
              >
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Company Details
                </p>
              </li>
              <li
                onClick={() => setState("payslip")}
                className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                  state === "payslip"
                    ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                    : ""
                }`}
              >
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Payslip Details
                </p>
              </li>
            </ul>
          </div>
        </div>
       
    </div>
    {state==="personal" ? (<ViewPersonalDetails/>) :state==="company" ? (<ViewCompanyDetails/>) :  (<ViewPayslipDetails/>)}
    </div>
  );
};


export default ViewEmployee