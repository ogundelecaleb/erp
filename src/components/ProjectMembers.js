import { Trash, UserAdd } from "iconsax-react";
import React, { useState } from "react";
import { Clients, TeamMembers } from "./Data";
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

const ProjectMembers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInviteModal, setIsInviteModal] = useState(false);
  const [isShareModal, setIsShareModal] = useState(false);
  const [isDeleteClientModal, setIsDeleteClientModal] = useState(false);
  const [isDeleteTeamModal, setIsDeleteTeamModal] = useState(false);

  function HandleInviteModalClose() {
    setIsInviteModal(false);
  }

  function HandleShareModalClose() {
    setIsShareModal(false);
  }

  function ToggleShareModal() {
    setIsShareModal(!isShareModal);
  }

  function ToggleInviteModal() {
    setIsInviteModal(!isInviteModal);
  }
  function ToggleDeleteClientModal() {
    setIsDeleteClientModal(!isDeleteClientModal);
  }
  function closeDeleteClientModal() {
    setIsDeleteClientModal(false);
  }

  function ToggleDeleteTeamModal() {
    setIsDeleteTeamModal(!isDeleteTeamModal);
  }
  function closeDeleteTeamModal() {
    setIsDeleteTeamModal(false);
  }

  return (
    <div className="bg-[#F9FAFB] rounded-[8px] w-full h-[38vh] p-[4px] md:p-[10px] xl:p-[24px] overflow-auto">
      <div className="flex-item flex-col md:flex-row gap-[30px] items-start">
        <div className="w-full lg:w-[50%]">
          <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
            <p className="text-[14px]  leading-[20px] text-[#667185]  ">
              Team Members
            </p>
            <button
              onClick={() => ToggleInviteModal()}
              className="h-[36px] w-[36px] flex-center bg-[#F7F9FC] shadow text-white text-[14px]  leading-[20px]  rounded-[6px]"
            >
              <UserAdd size="22" color="#667185" />
            </button>
          </div>
          <div className="p-3 md:p-4 bg-white">
            {isLoading && <div>Loading...</div>}
            {!isLoading && TeamMembers.length === 0 && (
              <tr>
                <td className="text-center" colspan="6">
                  <img
                    src="./nodata.gif"
                    className="mx-auto mt-6 h-[70px] "
                    alt=""
                  />
                  <h3 className="text-[16px] leading-[20px]  text-[#1A202C] font-extrabold mb-[6px]">
                    No Team Members
                  </h3>
                </td>
              </tr>
            )}

            <ul>
              {TeamMembers &&
                TeamMembers?.map((result, index) => (
                  <li key={index} className="flex-item gap-[10px] mb-3">
                    <img
                      src={result?.image}
                      alt=""
                      className="h-[40px] w-[40px] rounded-full"
                    />

                    <div className="h-full flex-1">
                      <p className="text-[16px]  leading-[20px] font-medium text-[#000] mb-2 ">
                        {result.name}
                      </p>
                      <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                        {result.email}
                      </p>
                    </div>

                    <Trash
                      onClick={() => ToggleDeleteTeamModal()}
                      variant="Linear"
                      color="#667185"
                      size="24"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
            <p className="text-[14px]  leading-[20px] text-[#667185]  ">
              Clients (4)
            </p>
            <button
              onClick={() => ToggleShareModal()}
              className="h-[36px] w-[36px] flex-center bg-[#F7F9FC] shadow text-white text-[14px]  leading-[20px]  rounded-[6px]"
            >
              <UserAdd size="22" color="#667185" />
            </button>
          </div>
          <div className="p-3 md:p-4 bg-white">
            {isLoading && <div>Loading...</div>}
            {!isLoading && Clients.length === 0 && (
              <tr>
                <td className="text-center" colspan="6">
                  <img
                    src="./nodata.gif"
                    className="mx-auto mt-6 h-[70px] "
                    alt=""
                  />
                  <h3 className="text-[16px] leading-[20px]  text-[#1A202C] font-extrabold mb-[6px]">
                    No Clients
                  </h3>
                </td>
              </tr>
            )}

            <ul>
              {Clients &&
                Clients?.map((result, index) => (
                  <li key={index} className="flex-item gap-[10px] mb-3">
                    <img
                      src={result?.image}
                      alt=""
                      className="h-[40px] w-[40px] rounded-full"
                    />

                    <div className="h-full flex-1">
                      <p className="text-[16px]  leading-[20px] font-medium text-[#000] mb-2 ">
                        {result.name}
                      </p>
                      <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                        {result.email}
                      </p>
                    </div>

                    <Trash
                      onClick={() => ToggleDeleteClientModal()}
                      variant="Linear"
                      color="#667185"
                      size="24"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Invite User */}
      <Modal
        isCentered
        isOpen={isInviteModal}
        onClose={HandleInviteModalClose}
        size="xl"
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
            Invite New Member
          </ModalHeader>
          <ModalCloseButton size={"sm"} />
          <Divider color="#98A2B3" />
          <ModalBody
            py={{ base: "20px", md: "24px" }}
            px={{ base: "16px", md: "24px" }}
            className="pt-[20px] md:pt-[24px] px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
          >
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Users
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder="Select Users"
                  className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                >
                  <option value="High">Ogundele caleb</option>
                </select>
              </div>
            </div>
          </ModalBody>
          <Divider />
          <ModalFooter gap={"16px"}>
            <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
              Cancel
            </button>
            <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
              {!isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Create </>
              )}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Invite User */}
      <Modal
        isCentered
        isOpen={isShareModal}
        onClose={HandleShareModalClose}
        size="xl"
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
            Share to Client
          </ModalHeader>
          <ModalCloseButton size={"sm"} />
          <Divider color="#98A2B3" />
          <ModalBody
            py={{ base: "20px", md: "24px" }}
            px={{ base: "16px", md: "24px" }}
            className="pt-[20px] md:pt-[24px] px-[16px] md:px-[24px] pb-[30px] md:pb-[40px]"
          >
            <div className="mb-[24px]">
              <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                Clients
              </label>
              <div className=" relative  mt-[16px]  flex items-center">
                <select
                  type="text"
                  placeholder="Select Clients"
                  className="w-full h-[48px] pl-[16px] px-2 py-[12px] text-[14px] text-[#344054] leading-[20px]  placeholder:text-[#98A2B3] placeholder:text-[12px]  border-[#D0D5DD] border-[0.2px] rounded-[8px] focus:outline-none focus:ring-[#F05800] focus:border-[#F05800] "
                  required
                  autoComplete="on"
                  autoFocus
                  name="full-name"
                  id="full-name"
                >
                  <option value="High">Ogundele caleb</option>
                </select>
              </div>
            </div>
          </ModalBody>
          <Divider />
          <ModalFooter gap={"16px"}>
            <button className="border-[0.2px]  border-[#98A2B3] w-[99px] text-center rounded-[8px] py-[12px] text-[14px] font-medium text-black">
              Cancel
            </button>
            <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
              {!isLoading ? (
                <ClipLoader color={"white"} size={20} />
              ) : (
                <> Create </>
              )}
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={isDeleteClientModal}
        onClose={closeDeleteClientModal}
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
              Delete Client
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
              Are you sure you want to delete this member? This action cannot be
              undone.
            </p>
          </ModalBody>
          <ModalFooter gap={"16px"}>
            <button
              onClick={closeDeleteClientModal}
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

      <Modal
        isCentered
        isOpen={isDeleteTeamModal}
        onClose={closeDeleteTeamModal}
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
              Delete Member
            </p>

            <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
              Are you sure you want to delete this member? This action cannot be
              undone.
            </p>
          </ModalBody>
          <ModalFooter gap={"16px"}>
            <button
              onClick={closeDeleteTeamModal}
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

export default ProjectMembers;
