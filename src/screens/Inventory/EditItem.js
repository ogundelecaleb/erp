import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import {
  Calendar2,
  CloseCircle,
  DocumentDownload,
  DocumentUpload,
  Import,
  Maximize4,
  NoteText,
  Paperclip2,
  Refresh2,
  SearchNormal1,
  Status,
  Task,
} from "iconsax-react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import {
  Grid,
  Flex,
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
import {
  Add,
  Calendar,
  Chart,
  ChartCircle,
  Clipboard,
  DocumentText,
  Edit,
  Eye,
  Happyemoji,
  More,
  Profile2User,
  Trash,
  UserAdd,
} from "iconsax-react";
import ModalLeft from "../../components/ModalLeft";
import TaskTab from "../../components/project/TaskTab";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const EditItem = () => {
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
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff]  mb-[20px]">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Inventory /
              </p>
              <Link to="/inventorymanagement">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; Manage inventory /
                </p>
              </Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Edit item
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[16px] ">
            <select
              type="text"
              placeholder="Select User"
              className="max-w-[137px] h-[36px]  px-5 py-[8px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
              required
              autoComplete="on"
              autoFocus
              name="role"
              id="role"
            >
              <option value="Medium">Products</option>
              <option value="Low">Services</option>
              <option value="Low">Parts</option>
            </select>
          </div>
        </div>
        <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
          <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
            <div className=" w-full md:w-[50%]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Name <sup className="text-[#F44336]">*</sup>
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

            <div className="w-full md:w-[50%] ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                SKU <sup className="text-[#F44336]">*</sup>
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
                  Category <sup className="text-[#F44336]">*</sup>
                </label>
                <button className="text-[14px] text-[#F44336] leading-[20px] font-semibold  ">
                  Add new category
                </button>
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
                  <option value="Medium">Products</option>
                  <option value="Low">Services</option>
                  <option value="Low">Parts</option>
                </select>
              </div>
            </div>

            <div className="flex-item flex-col md:flex-row w-full md:w-[50%] gap-[20px] ">
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Tax <sup className="text-[#F44336]">*</sup>
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
                    <option value="Medium">Products</option>
                    <option value="Low">Services</option>
                    <option value="Low">Parts</option>
                  </select>
                </div>
              </div>
              <div className=" w-full md:w-[50%] ">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Unit <sup className="text-[#F44336]">*</sup>
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
                    <option value="Medium">Products</option>
                    <option value="Low">Services</option>
                    <option value="Low">Parts</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff] p-[10px] md:p-[20px] mb-[20px] ">
        <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
          <div className=" w-full md:w-[50%]">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Sales Price <sup className="text-[#F44336]">*</sup>
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

          <div className="w-full md:w-[50%] ">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Purchase Price <sup className="text-[#F44336]">*</sup>
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
                Warehouse <sup className="text-[#F44336]">*</sup>
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
                <option value="Medium">Products</option>
                <option value="Low">Services</option>
                <option value="Low">Parts</option>
              </select>
            </div>
          </div>

          <div className="w-full md:w-[50%] ">
            <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
              Quantity <sup className="text-[#F44336]">*</sup>
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
      </div>
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] overflow-hidden h-full w-full bg-[#ffff] p-[10px] md:p-[20px] mb-[20px] ">
        <div className="flex-between p-[12px] md:p-[16px] xl:p-[20px] mb-[20px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]">
          <div className="flex-item gap-4">
            <img
              src="./assets/download.png"
              alt="download"
              className="w-[56px] h-[56px] "
            />

            <div className="flex flex-col justify-between h-full">
              <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                Dashboard card.png
              </p>
              <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                1.2 MB
              </p>
            </div>
          </div>
          <div className="flex-item gap-2">   <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#4CAF50] rounded-md">
              <Refresh2 variant="Linear" color="#fff" size="20" />
            </buttion>
            <buttion className="h-[44px] w-[44px] flex justify-center items-center bg-[#F44336] rounded-md">
              <Trash variant="Linear" color="#fff" size="20" />
            </buttion></div>
        </div>{" "}
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
              <> Submit</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditItem;
