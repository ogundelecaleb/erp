import React, { useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import {
  Bill,
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
import ModalLeft from "../ModalLeft";
import { ClipLoader } from "react-spinners";
import { userList } from "../Data";
import Select from "react-select";

const LeadCard = ({
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
  const [isLabelOpen, setIsLabelOpen] = useState(false);
  const [isDOpen, setIsDOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [selectId, setSelectId] = useState("");
  const [checkLabel, setCheckLabel] = useState("");

  const Labels = [
    { id: 1, label: "On Hold" },
    { id: 2, label: "New" },
    { id: 3, label: "Pending" },
    { id: 4, label: "Loss" },
    { id: 5, label: "Win" },
  ];

  const ToggleEditModalOpen = () => {
    setIsEditOpen(!isEditOpen);
  };
  const HandleEditModalClose = () => {
    setIsEditOpen(false);
  };

  function closeLabelModal() {
    setIsLabelOpen(false);
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
                  setIsLabelOpen(true);
                  setProjectData(project);
                  HandleDropdown(c.id);
                }}
                className="flex items-center w-full "
              >
                {" "}
                <Bill
                  variant="Linear"
                  color="#98A2B3"
                  size="16"
                  className="mr-2"
                />{" "}
                <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                  Label
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
      <Modal
        isCentered
        isOpen={isLabelOpen}
        onClose={closeLabelModal}
        size="lg"
        style={{ borderRadius: 12 }}
        motionPreset="slideInBottom"
        className="rounded-[12px]"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            py="4"
            color="#000000"
            className="text-[18px] md:text-[20px] text-[#000000] font-medium leading-[24px] md:leading-[24px]"
          >
            Labels
          </ModalHeader>
          <ModalCloseButton size={"sm"} />
          <Divider color="#98A2B3" />

          <ModalBody
            py={{ base: "20px", md: "24px" }}
            px={{ base: "16px", md: "24px" }}
            className=" px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
          >
            <ul>
              {Labels &&
                Labels.map((label) => (
                  <li
                    onClick={() => setCheckLabel(label.label)}
                    className="flex-item items-center gap-[16px] mb-[24px]"
                  >
                    {label.label === checkLabel ? (
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="1"
                          width="23"
                          height="23"
                          rx="5.5"
                          fill="#F9FAFB"
                        />
                        <rect
                          x="0.5"
                          y="1"
                          width="23"
                          height="23"
                          rx="5.5"
                          stroke="#F05800"
                        />
                        <path
                          d="M17.5984 8.30029L9.89844 16.0003L6.39844 12.5003"
                          stroke="#F05800"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <div className="h-[24px] w-[24px] rounded-[6px] border border-[#D0D5DD]"></div>
                    )}

                    <label className="text-[14px] md:text-[18px] text-[#667185] leading-[20px] md:leading-[27px] ">
                      {label.label}
                    </label>
                  </li>
                ))}
            </ul>
          </ModalBody>
          <Divider color="#98A2B3" />

          <ModalFooter gap={"16px"}>
            <button
              onClick={closeLabelModal}
              className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
            >
              Cancel
            </button>
            <button
              //   onClick={handleLabel}
              className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
            >
              {isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Save </>
              )}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Edit Modal */}
      <ModalLeft isOpen={isEditOpen} onClose={HandleEditModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Edit Lead
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
                Subject
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Dashboard cards"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                User
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
                  <option value="High">Ogundelecaleb</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
          Name
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Sales Rep"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
               
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
           Email address
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="email"
                  placeholder="Dse@gmail.com"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
               
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
   Phone Number
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="+234 812373484"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
               
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
            </div>

            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
         Sources
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

            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
          Proucts
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

            <div className="flex-item flex-col md:flex-row w-full gap-5">
              {" "}
              <div className="mb-[24px] w-full md:w-[40%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                 Stage
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <select
                    type="text"
                    placeholder="Draft"
                    className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                    required
                    autoComplete="on"
                    autoFocus
                    name="full-name"
                    id="full-name"
                  >
                    <option value="High">Draft</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div className="mb-[24px] w-[60%]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">

                    Follow up Date
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
                Notes
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
              Delete Lead
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
            Are you sure you want to delete this lead? This action cannot be undone.
            </p>
          </ModalBody>
          <div gap={"16px"} className=" flex items-center justify-between  gap-[12px] px-[16px] md:px-[20px] pb-[20px]  ">
            <button
                 onClick={closeDeleteModal}
              className="border-[0.2px]  border-[#98A2B3] w-[50%] text-center  rounded-[8px] py-[12px] text-[14px] font-medium text-black"
            >
              Cancel
            </button>
            <button
                  //onClick={handleDelete}
              className="border-[0.2px]  border-[#98A2B3]  w-[50%] bg-[#DE3D31] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
            >
              {isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Delete </>
              )}
            </button>
          </div>
         
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeadCard;
