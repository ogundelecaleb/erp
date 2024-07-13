import { ArrowRight, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";

import BranchSetUp from "../../components/hrm/BranchSetUp";
import DepartmentSetup from "../../components/hrm/DepartmentSetup";
import DesignationSetup from "../../components/hrm/DesignationSetup";
import AllowanceSetup from "../../components/hrm/AllowanceSetup";
import LoanSetup from "../../components/hrm/LoanSetup";
import DeductionSetup from "../../components/hrm/DeductionSetup";
import LeaveSetup from "../../components/hrm/LeaveSetup";
import TerminationSetup from "../../components/hrm/TerminationSetup";
import PayslipSetup from "../../components/hrm/PayslipSetup";
import AttendanceSetup from "../../components/hrm/AttendanceSetup";
import LeaveStatusSetup from "../../components/hrm/LeaveStatusSetup";

const SetUp = () => {
  const [staged, setStaged] = useState("Item Category");

  const Stages = [
    { id: 1, name: "Branch" },
    { id: 2, name: "Department" },
    { id: 3, name: "Designation" },
    { id: 4, name: "Allowance Option" },
    { id: 5, name: "Loan Option" },
    { id: 6, name: "Deduction Option" },
    { id: 7, name: "Leave Type" },
    { id: 8, name: "Termination Type" },
    { id: 9, name: "Payslip  Status" },
    { id: 10, name: "Attendance  Status" },
    { id: 11, name: "Leave  Status" },
  ];
  return (
    <div className="p-[20px] bg-[#F2F2F2] h-screen ">
      {/* <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <p>ProjectSetup</p>
      </div> */}
      <div className="flex justify-between gap-[30px]">
        <div className="w-[411px] rounded-lg overflow-hidden ">
          {Stages &&
            Stages.map((stage, index) => (
              <button
                onClick={() => setStaged(stage.name)}
                className={`py-[18px] w-full px-[28px] flex-between overflow-hidden ${
                  stage.name === staged
                    ? "bg-[#F05800] text-[#fff] "
                    : "bg-[#fff] text-[#000000]"
                } `}
              >
                {stage?.name}
                <ArrowRight2 variant="Linear" size="20" />
              </button>
            ))}
        </div>
        {staged === "Branch" ? (
          <BranchSetUp />
        ) : staged === "Department" ? (
          <DepartmentSetup />
        ) : staged === "Designation" ? (
          <DesignationSetup
          />
        ) : staged === "Allowance Option" ? (
          <AllowanceSetup />
        ) : staged === "Loan Option" ? (
            <LoanSetup />

        ) : staged === "Deduction Option" ? (
            <DeductionSetup />
        ) : staged === "Leave  Status" ? (
            <LeaveSetup />
        ) : staged === "Termination" ? (
            <TerminationSetup />

        ) : staged === "Payslip  Status" ? (
            <PayslipSetup />
        ) : staged === "Attendance  Status" ? (
            <AttendanceSetup />
        ) : staged === "Leave  Status" ? (
            <LeaveStatusSetup />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SetUp;

