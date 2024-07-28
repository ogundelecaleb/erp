import React, { useState } from "react";

import ModalLeft from "../../components/ModalLeft";
import TaskTab from "../../components/project/TaskTab";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { Add } from "iconsax-react";
import { Input } from "@chakra-ui/react";

const EditProposal = () => {
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

  const AddItem = () => {
    return (
      <div className="">
        <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]  px-[10px] md:px-[20px] pt-[10px] md:pt-[20px] ">
          <div className=" w-full md:w-[60%] flex-item gap-[14px] md:gap-[20px]">
            <div className="w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Item Type
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select account type</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>

            <div className="w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Items
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select item</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>
          </div>

          <div className=" w-full md:w-[40%] flex-item gap-[14px] md:gap-[20px]">
            <div className="w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Item Type
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select account type</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>

            <div className="w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Items
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select item</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]  px-[10px] md:px-[20px]">
          <div className="flex-item flex-col md:flex-row w-full md:w-[40%] gap-[20px] ">
            <div className=" w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Category
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">select category</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>
            <div className=" w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Purchase Date
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="date"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="date"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-[60%]">
            <div className="flex-between mb-[8px] md:mb-[16px]">
              <label className="text-[14px] text-[#667185] leading-[20px]  ">
                Description
              </label>
            </div>

            <div className=" relative  mt-[16px]  flex items-center">
              <textarea
                type="text"
                placeholder=""
                className="w-full h-[164px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                required
                autoComplete="on"
                autoFocus
                name="full-name"
                id="full-name"
                //value=""
                //onChange={() => {}}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff]  mb-[20px]">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
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
                &nbsp; Invoice
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Billing Type
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select account type</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Proposal Number
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%]">
              <div className="flex-between mb-[8px] md:mb-[16px]">
                <label className="text-[14px] text-[#667185] leading-[20px]  ">
                  Template
                </label>
              </div>

              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder=""
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                >
                  <option value="Medium">Select template</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Category
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="Medium">select category</option>
                    <option value="Low">Services</option>
                    <option value="Low">Parts</option>
                  </select>
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Issue Date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center justify-between gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                items
              </p>
            </div>
          </div>
          <button onClick={AddItem} className="flex items-center gap-[8px] ">
            <p className="text-[14px] text-[#667185] leading-[20px]">
              Add item
            </p>

            <Add variant="Linear" color="#667185" size="16" />
          </button>
        </div>
        <div className="">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]  px-[10px] md:px-[20px] pt-[10px] md:pt-[20px] ">
            <div className=" w-full md:w-[60%] flex-item gap-[14px] md:gap-[20px]">
              <div className="w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Item Type
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="Medium">Select account type</option>
                    <option value="Low">Services</option>
                    <option value="Low">Parts</option>
                  </select>
                </div>
              </div>

              <div className="w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Items
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder=""
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  >
                    <option value="Medium">Select item</option>
                    <option value="Low">Services</option>
                    <option value="Low">Parts</option>
                  </select>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[40%] flex-item gap-[14px] md:gap-[20px]">
              <div className="w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Quantity
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <p className="absolute left-[16px] text-[#D0D5DD] pr-2 border-r border-[#D0D5DD]">Piece</p>

                  <input
                    type="text"
                    placeholder="20"
                    className="w-full h-[48px] pl-[68px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>

              <div className="w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Tax (%)
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="SGST(5%)"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start flex-col md:flex-row gap-[20px] mb-[24px]  px-[10px] md:px-[20px]">
            <div className="flex-item flex-col md:flex-row w-full md:w-[40%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Price
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <p className="absolute left-[16px] text-[#D0D5DD] pr-2 border-r border-[#D0D5DD]">$</p>
                  <input
                    type="text"
                    placeholder="20000"
                    className="w-full h-[48px] pl-[38px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Discount
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <p className="absolute left-[16px] text-[#D0D5DD] pr-2 border-r border-[#D0D5DD]">$</p>
                  <input
                    type="text"
                    placeholder="20000"
                    className="w-full h-[48px] pl-[38px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //value=""
                    //onChange={() => {}}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[60%]">
              <div className="flex-between mb-[8px] md:mb-[16px]">
                <label className="text-[14px] text-[#667185] leading-[20px]  ">
                  Description
                </label>
              </div>

              <div className=" relative  mt-[16px]  flex items-center">
                <textarea
                  type="text"
                  placeholder=""
                  className="w-full h-[164px] pl-[16px] py-[12px] text-[14px] text-[#344054] bg-[#F9FAFB] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <AddItem/> */}
      </div>

      <div className="flex justify-end mt-[24px]">
        <div className=" max-w-[460px] w-full mb-[24px]   border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px] bg-white">
          <ul>
            <li className="flex-between mb-[14px] md:mb-[20px]">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Sub Total ($)
              </p>

              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                1,000.00
              </p>
            </li>
            <li className="flex-between mb-[14px] md:mb-[20px]">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Discount ($)
              </p>

              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                0.00
              </p>
            </li>
            <li className="flex-between mb-[14px] md:mb-[20px]">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Tax ($){" "}
              </p>

              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                50.00
              </p>
            </li>
            <li className="flex-between mb-[14px] md:mb-[20px]">
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Total Amount ($)
              </p>

              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                50.00
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-[0.8px]  border-[#E4E7EC] mb-[20px]" />
      <div className=" flex-item  justify-end">
        <div className="flex-item gap-2">
          {" "}
          <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
            Cancel
          </button>
          <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
            {!isLoading ? (
              <ClipLoader color={"white"} size={20} />
            ) : (
              <> Save changes</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProposal;
