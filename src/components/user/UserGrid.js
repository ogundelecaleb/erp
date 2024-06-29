import React, { useState } from "react";
import { ProjectData, Users } from "../Data";
import {
  Add,
  Calendar,
  CloseCircle,
  DocumentDownload,
  DocumentUpload,
  Edit,
  ElementEqual,
  Eye,
  Layer,
  Maximize4,
  Message2,
  More,
  RowHorizontal,
  SearchNormal1,
  Setting5,
  ShieldSecurity,
  Trash,
} from "iconsax-react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useNavigate, useNavigation } from "react-router-dom";
import ModalLeft from "../ModalLeft";
import { ClipLoader } from "react-spinners";
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

const UserGrid = () => {
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDisableOpen, setIsDisableOpen] = useState(false);
  const [isResetpen, setIsResetOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleEdit = () => {
    setIsEditOpen(!isEditOpen);
  };
  const toggleDelete = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };
  const toggleDisable = () => {
    setIsDisableOpen(!isDisableOpen);
  };
  const toggleReset = () => {
    setIsResetOpen(!isResetpen);
  };
  const HandleEditModalClose = () => {
    setIsEditOpen(false);
  };
  const HandleDeleteModalClose = () => {
    setIsDeleteOpen(false);
  };
  const HandleDisableModalClose = () => {
    setIsDisableOpen(false);
  };
  const HandleResetModalClose = () => {
    setIsResetOpen(false);
  };
  return (
    <div className="overflow-auto">
      <div className="bg-[#F9FAFB] p-[10px] md:p-[16px] h-full overflow-auto lg:p-[20px] grid grid-cols-2  md:grid-cols-4 gap-[20px] ">
        {!Users
          ? ""
          : Users.map((user) => (
              <div className="shadow shadow-[#F0F2F5]/32 px-[16px] py-[16px] md:py-[20px] bg-white rounded-[8px]">
                <div className="flex justify-between items-center mb-[10px] md:mb-[24px] lg:mb-[32px]">
                  <button
                    className={`rounded-[20px] md:rounded-[40px]  py-[2px] md:py-[4px] px-[12px] bg-[#F05800]
                           text-[10px] md:text-[12px] text-white  font-semibold leading-[16px] md:leading-[18px]`}
                  >
                    <p>{user?.role}</p>
                  </button>

                  <Menu>
                    <MenuButton bg={"none"} as={Button}>
                      <button className="h-[20px] w-[20px] md:h-[24px] md:w-[24px] rounded-[8px] hover:bg-[#F7F9FC] flex justify-center items-center">
                        <img
                          src="./assets/3dot.png"
                          className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
                          alt="3 dots"
                        />
                      </button>
                    </MenuButton>
                    <MenuList maxW="32" className="">
                      <MenuItem
                        onClick={toggleEdit}
                        w="full"
                        color="#bf0d0d"
                        mb="10px"
                      >
                        <Edit
                          variant="Linear"
                          color="#98A2B3"
                          size="16"
                          className="mr-2"
                        />{" "}
                        <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                          Edit
                        </p>
                      </MenuItem>
                      <MenuItem
                        onClick={toggleDisable}
                        w="full"
                        color="#bf0d0d"
                        mb="10px"
                      >
                        <ShieldSecurity
                          variant="Linear"
                          color="#98A2B3"
                          size="16"
                          className="mr-2"
                        />{" "}
                        <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                          Disable Login
                        </p>
                      </MenuItem>
                      <MenuItem
                        onClick={toggleReset}
                        w="full"
                        color="#bf0d0d"
                        mb="10px"
                      >
                        <Setting5
                          variant="Linear"
                          color="#98A2B3"
                          size="16"
                          className="mr-2"
                        />{" "}
                        <p className="text-[12px] md:text-[14px] text-[#475367]  font-normal leading-[18px] md:leading-[20px]">
                          Reset Password
                        </p>
                      </MenuItem>

                      <MenuItem
                        onClick={toggleDelete}
                        w="full"
                        color="#bf0d0d"
                        mb="10px"
                      >
                        <Trash color="#F44336" size="16" className="mr-2" />{" "}
                        <p className="text-[12px] md:text-[14px] text-[#F44336]  font-normal leading-[18px] md:leading-[20px]">
                          Delete
                        </p>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </div>

                <div>
                  <img
                    src={user?.image}
                    className="h-[100px] w-[90px] md:h-[120px] md:w-[120px] mx-auto"
                    alt="3 dots"
                  />

                  <p className="text-[12px] md:text-[14px] text-[#667185] mt-2 text-center  font-normal leading-[18px] md:leading-[20px]">
                    {user?.email}
                  </p>
                </div>
              </div>
            ))}
      </div>

      {/* Edit Modal */}
      <ModalLeft isOpen={isEditOpen} onClose={HandleEditModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Update User
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={HandleEditModalClose} className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Name
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Name"
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
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Email
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="email"
                  placeholder="Email"
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
            <div className="mb-[24px] w-full ">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Role
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder="Select role"
                  className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="role"
                  id="role"
                >
                  <option value="High">HR</option>
                  <option value="Medium">Staff</option>
                  <option value="Low">Client</option>
                  <option value="Low">Vendor</option>
                </select>
              </div>
            </div>
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Phone Number
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="+23481232122"
                  className="w-full h-[48px] pl-[16px] py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name=""
                  id="full-name"
                  //value=""
                  //onChange={() => {}}
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>
              <p className=" text-[12px]   text-[#FF9800] leading-[20px] font-medium text-left mt-1 ">
                Please add mobile number with country code (ex. +234)
              </p>
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

      {/* Reset Modal */}
      <ModalLeft isOpen={isResetpen} onClose={HandleResetModalClose}>
        <div>
          <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
            <div className="flex items-center gap-[16px]">
              <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <div className="flex items-center">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  Reset Password
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={HandleResetModalClose} className=" ">
                <CloseCircle variant="Linear" color="#667185" size="20" />
              </button>
            </div>
          </div>

          <div className="p-[12px] md:p-[20px] xl:p-[24px]">
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Password
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Enter Password"
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
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Confirm Password
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <input
                  type="text"
                  placeholder="Enter password again"
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

      {/* Disable Project */}
      <Modal
        isCentered
        isOpen={isDisableOpen}
        onClose={HandleDisableModalClose}
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
              <rect x="4" y="4" width="48" height="48" rx="24" fill="#FFDFB0" />
              <rect
                x="4"
                y="4"
                width="48"
                height="48"
                rx="24"
                stroke="#FFF5E6"
                stroke-width="8"
              />
              <path
                d="M28 38C33.5 38 38 33.5 38 28C38 22.5 33.5 18 28 18C22.5 18 18 22.5 18 28C18 33.5 22.5 38 28 38Z"
                stroke="#FF9800"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28 24V29"
                stroke="#FF9800"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.9961 32H28.0051"
                stroke="#FF9800"
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
              Disable User Login{" "}
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
              Are you sure you want to disable this user log in? This action can
              still be reversed.
            </p>
          </ModalBody>
          <ModalFooter gap={"16px"}>
            <button
              onClick={HandleDisableModalClose}
              className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black"
            >
              Cancel
            </button>
            <button
              // onClick={handleDelete}
              className="border-[0.2px]  border-[#E88A00] w-[99px] bg-[#E88A00] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white"
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
      {/* Delete Project */}
      <Modal
        isCentered
        isOpen={isDeleteOpen}
        onClose={HandleDeleteModalClose}
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
              Delete user{" "}
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
              Are you sure you want to delete this user? This action cannot be
              undone.
            </p>
          </ModalBody>
          <ModalFooter gap={"16px"}>
            <button
              onClick={HandleDeleteModalClose}
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
  );
};

export default UserGrid;
