import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import {
  Calendar,
  Calendar2,
  CloseCircle,
  Import,
  Maximize4,
  NoteText,
  Paperclip2,
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
import { Edit, Eye, Profile2User, Trash } from "iconsax-react";
import ModalLeft from "./ModalLeft";
import TaskTab from "./TaskTab";
import { ClipLoader } from "react-spinners";
import { userList } from "../Data";
import Select from "react-select";

const TaskCard = ({
  title,
  id,
  column,
  handleDragStart,
  mode,
  description,
  c,
  project,
  setCards,
  DropIndicator,
  cards,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDOpen, setIsDOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [selectId, setSelectId] = useState("");

  const ToggleEditModalOpen = () => {
    setIsEditOpen(!isEditOpen);
  };
  const HandleEditModalClose = () => {
    setIsEditOpen(false);
  };

  function HandleModalClose() {
    setIsOpen(false);
  }
  function ToggleDeleteModal(id) {
    setDeleteId(id);
    setIsDeleteModal(!isDeleteModal);
  }
  function closeDeleteModal() {
    setIsDeleteModal(false);
  }

  function HandleDropdown(i) {
    setSelectId(i);

    if (selectId === c.id) {
      setIsDOpen(!isDOpen);
    }
  }

  const handleDelete = async () => {
    setIsLoading(true);
    setCards((pv) => pv.filter((c) => c.id !== deleteId));
  };

  return (
    <>
      <DropIndicator beforeId={c.id} column={c.column} />
      <motion.div
        layout
        layoutId={c.id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, c.id)}
        className="cursor-grab mb-3 relative px-[16px] overflow-hidden py-[10px] border-[0.2px] border-[#98A2B3] bg-[#fff] rounded-[8px] active:cursor-grabbing"
      >
        {isDOpen && (
          <div className=" absolute top-9 left-1 w-[200px] py-[10px] border-[0.2px] border-[#98A2B3] bg-[#fff] rounded-[8px] px-3">
            <ul className="flex flex-col gap-3">
              <li
                onClick={() => {
                  setIsOpen(true);
                  setProjectData(project);
                  HandleDropdown(c.id);
                }}
                className="flex items-center w-full "
              >
                {" "}
                <Eye
                  variant="Linear"
                  color="#98A2B3"
                  size="16"
                  className="mr-2"
                />{" "}
                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                  View
                </p>
              </li>
              <li
                onClick={ToggleEditModalOpen}
                className="flex items-center w-full"
              >
                {" "}
                <Edit
                  variant="Linear"
                  color="#98A2B3"
                  size="16"
                  className="mr-2"
                />{" "}
                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                  Edit
                </p>
              </li>
              <li
                onClick={() => ToggleDeleteModal(c.id)}
                className="flex items-center w-full "
              >
                {" "}
                <Trash color="#F44336" size="16" className="mr-2" />{" "}
                <p className="text-[12px] md:text-[14px] text-[#F44336]  font-normal leading-[18px] md:leading-[20px]">
                  Delete
                </p>
              </li>
            </ul>
          </div>
        )}
        <div className="flex justify-between items-center mb-[16px] ">
          {" "}
          <button
            className={`rounded-[20px] md:rounded-[40px] flex justify-center items-center gap-2 px-[12px]  py-[4px] md:py-[4px] border-[0.5px] ${
              c.mode === "High"
                ? "bg-[#FEECEB] text-[#F44336] border-[#F44336]"
                : c.mode === "Medium"
                ? "bg-[#FFF5E6] text-[#F44336] border-[#FF9800]"
                : "bg-[#EDF7EE] text-[#4CAF50] border-[#4CAF50]"
            }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px] `}
          >
            <div
              className={` ${
                c.mode === "High"
                  ? "bg-[#F44336]"
                  : c.mode === "Medium"
                  ? "bg-[#F44336]"
                  : "bg-[#4CAF50] "
              } h-[8px] w-[8px] rounded-full `}
            />
            <p>{c.mode}</p>
          </button>{" "}
          <button
            onClick={() => HandleDropdown(c.id)}
            className="  h-[28px] w-[28px]  rounded-sm flex justify-center items-center  hover:bg-[#CBD5E0]  "
          >
            <img
              src="./assets/3dot.png"
              className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
              alt="3 dots"
            />
          </button>
        </div>

        <p className="text-[14px] md:text-[16px] text-[#000]  font-semibold leading-[20px] md:leading-[24px] mb-4">
          {c.title}
        </p>
        <p className="text-[12px] md:text-[14px] text-[#667185]  font-normal leading-[18px] md:leading-[20px]">
          {c.description}
        </p>
      </motion.div>

      {/* Details Modal */}
      <ModalLeft isOpen={isOpen} onClose={HandleModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  {projectData?.heading} /
                </p>
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; {c.column}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]">
                <Edit variant="Linear" color="#667185" size="16" />
              </button>
              <button className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]">
                <Trash variant="Linear" color="#667185" size="16" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <p className="text-[#000] text-[20px] md:text-[24px] xl:text-[28px] font-semibold leading-[24px] ">
              {c.title}
            </p>

            <table className="mt-[18px] md:mt-[24px] max-w-[490px]">
              <tr className="">
                <th className=" flex items-center gap-2 text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                  <Profile2User variant="Linear" color="#667185" size="20" />
                  Status:
                </th>
                <td className="pb-[20px] pl-4 md:pl-6 ">
                  <img
                    src={projectData?.image}
                    alt="participant"
                    className="w-[68px] h-[24px] "
                  />
                  {/* <button
                    className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] mx-auto ${
                      result?.status === "On Hold"
                        ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                        : result?.status === "Ongoing"
                        ? "bg-[#F9FAFB] text-[#667185]"
                        : "bg-[#EDF7EE] text-[#4CAF50]"
                    }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                  >
                    <p>{result.status}</p>
                  </button> */}
                </td>
              </tr>
              <tr>
                <th className=" flex items-center gap-2 text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                  <Calendar2 variant="Linear" color="#667185" size="20" /> Start
                  Date{" "}
                </th>
                <td className="pb-[20px] pl-4 md:pl-6 ">
                  <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                    {projectData?.time}
                  </p>
                </td>
              </tr>
              <tr>
                <th className=" flex items-center gap-2 text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                  <Status variant="Linear" color="#667185" size="20" /> Priority
                </th>
                <td className="pb-[20px] pl-4 md:pl-6 ">
                  <button
                    className={`rounded-[20px] md:rounded-[40px] flex justify-center items-center gap-2 px-[12px]  py-[4px] md:py-[4px] border-[0.5px] ${
                      c.mode === "High"
                        ? "bg-[#FEECEB] text-[#F44336] border-[#F44336]"
                        : c.mode === "Medium"
                        ? "bg-[#FFF5E6] text-[#F44336] border-[#FF9800]"
                        : "bg-[#EDF7EE] text-[#4CAF50] border-[#4CAF50]"
                    }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px] `}
                  >
                    <div
                      className={` ${
                        c.mode === "High"
                          ? "bg-[#F44336]"
                          : c.mode === "Medium"
                          ? "bg-[#F44336]"
                          : "bg-[#4CAF50] "
                      } h-[8px] w-[8px] rounded-full `}
                    />
                    <p>{c.mode}</p>
                  </button>{" "}
                </td>
              </tr>
              <tr>
                <th className=" flex items-center gap-2 text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                  <NoteText variant="Linear" color="#667185" size="20" />{" "}
                  Description
                </th>
                <td className="pb-[20px] pl-4 md:pl-6 "></td>
              </tr>
            </table>
            <div className="p-[12px] md:p-[16px] xl:p-[20px] mb-[48px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]">
              {" "}
              <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                {c.description}
              </p>
            </div>
            <div className="flex-between mb-5 ">
              <div className="flex-item gap-2">
                {" "}
                <Paperclip2 variant="Linear" color="#667185" size="20" />{" "}
                <p className="text-[14px] md:text-base text-[#667185] leading-[20px] font-medium ">
                  Files (2)
                </p>
              </div>

              <div className="flex-item gap-2">
                {" "}
                <Import variant="Linear" color="#F05800" size="24" />{" "}
                <p className="text-[14px] md:text-base text-[#F05800] leading-[20px] font-medium ">
                  Download All
                </p>
              </div>
            </div>
            <ul>
              <li className="p-[12px] md:p-[16px] xl:p-[20px] mb-[20px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]">
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
              </li>
              <li className="p-[12px] md:p-[16px] xl:p-[20px] mb-[20px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]">
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
              </li>
            </ul>
          </div>
          <TaskTab />
        </div>
      </ModalLeft>

      {/* Edit Modal */}
      <ModalLeft isOpen={isEditOpen} onClose={HandleEditModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  {projectData?.heading} /
                </p>
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; {c.column}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Task
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Dashboard cards"
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

            <div className="flex-item flex-col md:flex-row w-full gap-5">
              {" "}
              <div className="mb-[24px] w-[60%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Milestone
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
                    placeholder="Dashboard cards"
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
              <div className="mb-[24px] w-full md:w-[40%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Priority
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder="Dashboard cards"
                    className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Assign to
              </label>
              <Select
                isMulti
                name="colors"
                options={userList}
                className="w-full   text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                styles={{
                  control: (base, state) => ({
                    ...base,
                    border: state.isFocused
                      ? "0.2px solid #D0D5DD"
                      : "0.2px solid #F05800",
                    borderRadius: "8px",
                    boxShadow: "none",
                    "&:hover": {
                      border: "0.2px solid #F05800",
                    },
                  }),
                }}
                classNamePrefix="react-select"
              />
            </div>

            <div className="flex-item flex-col md:flex-row w-full gap-5 mb-[24px]">
              {" "}
              <div className="w-full md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Start Date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <Calendar
                    size="16"
                    color="#98A2B3"
                    className="absolute left-[8px]"
                  />
                  <input
                    type="date"
                    placeholder="Project Name"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
                    //   value={formData.date}
                    //   onChange={(e) => handleChange(e)}
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                </div>
              </div>
              <div className="w-full md:w-[50%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Due date
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <Calendar
                    size="16"
                    color="#98A2B3"
                    className="absolute left-[8px]"
                  />
                  <input
                    type="date"
                    placeholder="Project Name"
                    className="w-full h-[48px] pl-[24px] pr-[8px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="date"
                    id="full-name"
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

            <div className="py-[20px] border-t border-b-[#E4E7EC] flex-item  justify-end">
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
        </div>
      </ModalLeft>

      <Modal
        isCentered
        isOpen={isDeleteModal}
        onClose={closeDeleteModal}
        size="md"
        style={{ borderRadius: 12 }}
        motionPreset="slideInBottom"
        className="rounded-[12px]"
      >
        <ModalOverlay />
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
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#FCC5C1" />
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
              Delete Task
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
              Are you sure you want to delete this task? This action cannot be
              undone.
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
              onClick={handleDelete}
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
    </>
  );
};

export default TaskCard;
