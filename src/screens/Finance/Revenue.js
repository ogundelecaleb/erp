import React, { useState } from "react";
import {
  Add,
  Book,
  Calendar,
  CloseCircle,
  DocumentDownload,
  DocumentUpload,
  Edit,
  ElementEqual,
  Eye,
  FilterSearch,
  Layer,
  Maximize4,
  Message2,
  More,
  RowHorizontal,
  SearchNormal1,
  Trash,
} from "iconsax-react";
import {
  Grid,
  Flex,
  Button,
  Divider,
  Modal,
  Thead,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import TransferTable from "../../components/finance/TransferTable";
import { ClipLoader } from "react-spinners";
import ModalLeft from "../../components/ModalLeft";
import RevenueTable from "../../components/finance/RevenueTable";

const Revenue = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };
  const closeCreateModal = () => {
    setIsCreate(false);
  };

  return (
    <div>
      {" "}
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px]  bg-[#ffff] mt-[24px] ">
        <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Finance & Accounting /{" "}
              </p>
              <Link to="">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Income /{" "}
                </p>
              </Link>

              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Revenue
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
              onClick={() => toggleCreate()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Ceate revenue
              </p>

              <Add variant="Linear" color="#667185" size="16" />
            </button>
          </div>
        </div>
        <div className="p-[10px] md:p-[16px] lg:p-[20px]">
          {" "}
          <div className="flex items-center gap-4 flex-wrap">
            <input
              type="date"
              placeholder=""
              className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              autoComplete="on"
              autoFocus
              name="date"
              id="date"
            />
            <select
              type="text"
              placeholder="e"
              className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              required
              autoComplete="on"
              autoFocus
              name="f"
              id="full-name"
            >
              <option value="High">Select Account</option>
              <option value="Medium">January</option>
              <option value="Low">Febuary</option>
            </select>

            <select
              type="text"
              placeholder="Select"
              className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              required
              autoComplete="on"
              autoFocus
              name="full-name"
              id="full-name"
            >
              <option value="High">Select Customer</option>
              <option value="Medium">2020</option>
              <option value="Low">2021</option>
            </select>
            <select
              type="text"
              placeholder="Select"
              className="w-[240px] h-[44px] bg-[#F9FAFB]  px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] focus:border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              required
              autoComplete="on"
              autoFocus
              name="full-name"
              id="full-name"
            >
              <option value="High">Select Category</option>
              <option value="Medium">2020</option>
              <option value="Low">2021</option>
            </select>

            <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <FilterSearch variant="Linear" color="#4CAF50" size="20" />
            </buttion>
            <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <Trash variant="Linear" color="#F44336" size="20" />
            </buttion>
          </div>
        </div>
      </div>
      <RevenueTable />
      {/* CReate Modal */}
      <ModalLeft isOpen={isCreate} onClose={closeCreateModal}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Create New Transfer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={closeCreateModal} className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="flex-item  gap-[24px] mb-[24px]">
              <div className="w-full  md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder=""
                    className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="date"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="w-full  md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Amount
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder=""
                    className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="date"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>

            <div className="flex-item  gap-[24px] mb-[24px]">
              <div className="w-full  md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Account
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="state"
                    id="account"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select account</option>
                    <option value="Monthly Payslip">new ChartOfAccount</option>
                  </select>
                </div>
              </div>
              <div className="w-full  md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Customer
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="state"
                    id="customer"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select customer</option>
                    <option value="Monthly Payslip">new ChartOfAccount</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex-item  gap-[24px] mb-[24px]">
              <div className="w-full  md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Category
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="state"
                    id="customer"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="">Select Category</option>
                    <option value="Monthly Payslip">new ChartOfAccount</option>
                  </select>
                </div>
              </div>
              <div className="w-full  md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Reference
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] px-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="reference"
                    id="reference"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>

            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Description
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <textarea
                  type="text"
                  placeholder="Enter description"
                  className="w-full h-[164px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  //   value={formData.date}
                  //   onChange={(e) => handleChange(e)}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
              <div className="flex-item gap-2">
                {" "}
                <button
                  onClick={closeCreateModal}
                  className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
                >
                  Cancel
                </button>
                <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
                  {!isLoading ? (
                    <ClipLoader color={"white"} size={20} />
                  ) : (
                    <> Create</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalLeft>
    </div>
  );
};

export default Revenue;
