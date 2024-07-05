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
import { TaskAnalytics } from "../../components/Data";

export function PriceDetails() {
  return (
    <div className=" w-full    border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px] mb-[24px]">
      <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-[24px] ">
        Pricing Details{" "}
      </p>
      <ul>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Purchase Price:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
            Refrigerator
          </p>
        </li>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Sales Price:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            BCOO8ACC
          </p>
        </li>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Unit:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            117
          </p>
        </li>
      </ul>
    </div>
  );
}

export function WarehouseDetails() {
  return (
    <div className=" w-full  border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px] mb-[24px]">
      <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-[24px] ">
        Warehouse Details
      </p>
      <ul>
        <li className="flex-between mb-[14px] md:mb-[20px] bg-[#F9FAFB] py-2">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Warehouse{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
            Quantity
          </p>
        </li>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            North Warehouse{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            0
          </p>
        </li>
      </ul>
    </div>
  );
}

export function Reports() {
  return (
    <div className=" w-full mb-[24px]   border-[0.2px] border-[#98a2b3] rounded-[8px] p-[14px] md:p-[20px]">
      <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-[24px] ">
        Reports{" "}
      </p>
      <ul>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Purchase Price:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
            Refrigerator
          </p>
        </li>
        <li className="flex-between mb-[14px] md:mb-[20px]">
          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
            Sales Price:{" "}
          </p>

          <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
            BCOO8ACC
          </p>
        </li>
      </ul>
    </div>
  );
}

export function LogTime() {
  const [isOpenImportModal, setIsOpenImportModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateModal, setIsCreateModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  function HandleCreateModalClose() {
    setIsCreateOpen(false);
  }

  function HandleEditModalClose() {
    setIsEditOpen(false);
  }

  function ToggleEditModal() {
    setIsEditOpen(!isEditOpen);
  }

  function ToggleCreateModal() {
    setIsCreateOpen(!isCreateOpen);
  }
  function ToggleDeleteModal(id) {
    setDeleteId(id);
    setIsDeleteModal(!isDeleteModal);
  }
  function closeDeleteModal() {
    setIsDeleteModal(false);
  }

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
      <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
        <p className="text-[18px]  leading-[27px] text-[#000]  ">Log Time</p>
        <button
          onClick={ToggleCreateModal}
          className="px-[4px] py-[4px] bg-[#F05800] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[24px]"
        >
          <Add color="#fff" variant="Linear" />
        </button>
        <Modal
          isCentered
          isOpen={isCreateOpen}
          onClose={HandleCreateModalClose}
          size="md"
          style={{ borderRadius: 12 }}
          motionPreset="slideInBottom"
          className="rounded-[12px]"
        >
          <ModalOverlay bg="blackAlpha.300" />
          <ModalContent>
            <ModalHeader
              py="4"
              color="#000000"
              className="text-[18px] md:text-[20px] text-[#000000] font-medium leading-[24px] md:leading-[24px]"
            >
            Create Log Time
            </ModalHeader>
            <ModalCloseButton size={"sm"} />
            <Divider color="#98A2B3" />
            <ModalBody
              py={{ base: "20px", md: "24px" }}
              px={{ base: "16px", md: "24px" }}
              className=" px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
            >
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="date"
                    placeholder="Hiring Individual Positions"
                    className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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

              <div className="">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Description
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <textarea
                    type="text"
                    placeholder="Add Description"
                    className="w-full h-[137px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px] placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
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
            </ModalBody>
            <Divider color="#98A2B3" />

            <ModalFooter gap={"16px"}>
              <button
                onClick={HandleCreateModalClose}
                className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
              >
                Cancel
              </button>
              <button
                // onClick={handleDelete}
                className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
              >
                {isLoading ? (
                  <ClipLoader color={"white"} size={20} />
                ) : (
                  <> Create </>
                )}
              </button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

      <div class="sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full  sm:px-6 lg:px-8">
          <div class="overflow-x-auto">
            <table className="min-w-full mb-6 border-b-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC]">
              <thead className="bg-light-gray">
                <tr className="">
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%] pl-5"
                  >
                    <div className="flex justify-left gap-[6px] md:gap-[12px] items-center">
                      Description
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Action
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading && <div>Loading...</div>}
                {!isLoading && TaskAnalytics.length === 0 && (
                  <tr>
                    <td className="text-center" colspan="6">
                      <img
                        src="./nodata.gif"
                        className="mx-auto mt-6 h-[70px] "
                        alt=""
                      />
                      <h3 className="text-[30px] leading-[35px]  text-[#1A202C] font-extrabold mb-[6px]">
                        No Project
                      </h3>
                    </td>
                  </tr>
                )}
                {TaskAnalytics &&
                  TaskAnalytics?.map((result) => (
                    <tr key={result.task} className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        {result.task}
                      </td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <div className="flex-center gap-2">
                          <Trash
                            onClick={() => ToggleDeleteModal()}
                            variant="Linear"
                            color="#F05800"
                            size="24"
                          />
                          <Modal
                            isCentered
                            isOpen={isDeleteModal}
                            onClose={closeDeleteModal}
                            size="md"
                            style={{ borderRadius: 12 }}
                            motionPreset="slideInBottom"
                            className="rounded-[12px]"
                          >
                            <ModalOverlay bg="blackAlpha.300" />
                            <ModalContent>
                              <ModalHeader
                                py="4"
                                color="#000000"
                                className="text-[18px]   font-medium leading-[24px] md:leading-[24px]"
                              >
                                <svg
                                  className="mx-auto"
                                  width="56"
                                  height="56"
                                  viewBox="0 0 56 56"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="4"
                                    y="4"
                                    width="48"
                                    height="48"
                                    rx="24"
                                    fill="#FCC5C1"
                                  />
                                  <rect
                                    x="4"
                                    y="4"
                                    width="48"
                                    height="48"
                                    rx="24"
                                    stroke="#FEECEB"
                                    stroke-width="8"
                                  />
                                  <path
                                    d="M28 38C33.5 38 38 33.5 38 28C38 22.5 33.5 18 28 18C22.5 18 18 22.5 18 28C18 33.5 22.5 38 28 38Z"
                                    stroke="#F44336"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M28 24V29"
                                    stroke="#F44336"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M27.9961 32H28.0051"
                                    stroke="#F44336"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </ModalHeader>
                              <ModalCloseButton size={"sm"} />
                              <ModalBody
                                py={{ base: "20px", md: "24px" }}
                                px={{ base: "16px", md: "24px" }}
                                className=" px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
                              >
                                <p className=" text-[16px] md:text-lg text-center  text-[#000] leading-[24px] font-medium  ">
                                  Delete Document
                                </p>

                                <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
                                  Are you sure you want to delete this document?
                                  This action cannot be undone.
                                </p>
                              </ModalBody>
                              <ModalFooter gap={"16px"}>
                                <button
                                  onClick={closeDeleteModal}
                                  className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
                                >
                                  Cancel
                                </button>
                                <button
                                  // onClick={handleDelete}
                                  className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
                                >
                                  {isLoading ? (
                                    <ClipLoader color={"white"} size={20} />
                                  ) : (
                                    <> Delete </>
                                  )}
                                </button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    </div>
  );
}
