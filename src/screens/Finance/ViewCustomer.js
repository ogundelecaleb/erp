import React, { useState } from "react";

import ModalLeft from "../../components/ModalLeft";
import TaskTab from "../../components/project/TaskTab";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import PersonalDetails from "../../components/hrm/PersonalDetails";
import CompanyDetails from "../../components/hrm/CompanyDetails.js";
import { Add, DocumentUpload, Edit, SearchNormal1 } from "iconsax-react";
import CustomerDetails from "../../components/finance/CustomerDetails.js";
import Proposal from "../../components/finance/Proposal.js";
import Invoice from "../../components/finance/Invoice.js";
import Revenue from "../../components/finance/Revenue.js";
import Project from "../../components/finance/Project.js";

const ViewCustomer = () => {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [state, setState] = useState("details");

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
    <div>
      <div className="border-t border-l border-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center">
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              Finance & Accounting /{" "}
            </p>
            <Link to="/customers">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                &nbsp; Customer /{" "}
              </p>
            </Link>
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              &nbsp; View Customer
            </p>
          </div>
          <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
          <div className="flex items-center gap-[8px]">
            <SearchNormal1 variant="Linear" color="#667185" size="16" />
            <input
              className="w-full lg:w-[300px] py-[6px] text-[16px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px] border border-transparent  focus:outline-none focus:ring-[#F05800] focus:border-b-[#F05800] "
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-[16px] ">
          <button
            onClick={() => toggleImportModal()}
            className="flex items-center gap-[8px] "
          >
            <p className="text-[14px] text-[#667185] leading-[20px]">
              Create invoice
            </p>

            <DocumentUpload variant="Linear" color="#667185" size="16" />
          </button>
          <button
            //  onClick={() => toggleCreate()}
            className="flex items-center gap-[8px] "
          >
            <p className="text-[14px] text-[#667185] leading-[20px]">
              Create proposal
            </p>

            <Add variant="Linear" color="#667185" size="16" />
          </button>
          <button
            //  onClick={() => toggleCreate()}
            className="flex items-center gap-[8px] "
          >
            <p className="text-[14px] text-[#667185] leading-[20px]">
              Edit Customer
            </p>

            <Edit variant="Linear" color="#667185" size="16" />
          </button>
        </div>
      </div>
      <div className="p-[20px] bg-[#F2F2F2] min-h-screen  ">
        <div className="border-[0.2px] border-[#E4E7EC] rounded-tr-[8px] rounded-tl-[8px]  overflow-hidden h-full w-full bg-[#ffff]  ">
          <div className=" p-[16px] md:p-[20px] block md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Ogundele Caleb
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[16px] ">
              <ul className="p-[4px] md:p-[6px] bg-[#F7F9FC] rounded-md flex items center border-[0.2px] border-[#D0D5DD]  ">
                <li
                  onClick={() => setState("details")}
                  className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                    state === "details"
                      ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                      : ""
                  }`}
                >
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Details
                  </p>
                </li>
                <li
                  onClick={() => setState("proposals")}
                  className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                    state === "proposals"
                      ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                      : ""
                  }`}
                >
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Proposals
                  </p>
                </li>
                <li
                  onClick={() => setState("invoices")}
                  className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                    state === "invoices"
                      ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                      : ""
                  }`}
                >
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Invoices
                  </p>
                </li>
                <li
                  onClick={() => setState("revenue")}
                  className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                    state === "revenue"
                      ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                      : ""
                  }`}
                >
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Revenue
                  </p>
                </li>
                <li
                  onClick={() => setState("project")}
                  className={`px-[20px] md:px-[28px] py-[5px] rounded-md cursor-pointer ${
                    state === "project"
                      ? "bg-[#fff] border-[0.2px] border-[#D0D5DD]"
                      : ""
                  }`}
                >
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Project
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {state === "details" ? (
          <CustomerDetails />
        ) : state === "proposals" ? (
          <Proposal />
        ) : state === "invoices" ? (
          <Invoice />
        ) : state === "revenue" ? (
          <Revenue />
        ) :  (
          <Project />
        )}
      </div>
    </div>
  );
};
export default ViewCustomer;
