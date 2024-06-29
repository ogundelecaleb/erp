import {
  SearchNormal1,
  Calendar2,
  MobileProgramming,
  UserAdd,
  Edit,
  Trash,
  Calendar,
  CloseCircle,
  Maximize4,
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
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ProjectActivities from "../../components/project/ProjectActivities";
import TaskList from "../../components/project/ProjectTask";
import TaskBoard from "../../components/project/ProjectTaskBoard";
import { TASKS } from "../../components/Data";
import Milestone from "../../components/project/Milestone";
import Document from "../../components/project/ProjectDocument";
import ProjectMembers from "../../components/project/ProjectMembers";
import { ClipLoader } from "react-spinners";
import ModalLeft from "../../components/ModalLeft";
import { Link, useNavigate } from "react-router-dom";


const ProjectDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state;
  const [value, setValue] = React.useState("1");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  function HandleEditModalClose() {
    setIsEditOpen(false);
  }

  function ToggleEditModal() {
    setIsEditOpen(!isEditOpen);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ToggleDeleteModal(id) {
    setIsDeleteModal(!isDeleteModal);
  }
  function closeDeleteModal() {
    setIsDeleteModal(false);
  }

  return (
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Project /{" "}
              </p>
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                &nbsp; Manage projects
              </p>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Project Details
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
              onClick={() =>
                navigate("/bugreport", {
                  // state: result,
                })
              }
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Bug report
              </p>

              <Calendar2 variant="Linear" color="#667185" size="16" />
            </button>
            <button
             onClick={() =>
              navigate("/ganttchart", {
                // state: result,
              })
            }
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Gant chart
              </p>

              <MobileProgramming variant="Linear" color="#667185" size="16" />
            </button>
          </div>
        </div>
        <div className="p-[8px] md:p-[16px] xl:p-[20px]">
          <div className="flex items-center justify-between">
            <p className="text-[18px] md:text-[20px] text-[#000] leading-[20px] md:leading-[25px] font-medium">
              {result.heading}
            </p>
            <div className="flex items-center gap-[12px] ">
              {" "}
              <img
                src="./assets/groupImage.png"
                alt="participant"
                className="w-[68px] h-[24px] "
              />{" "}
              <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
              <button className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]">
                <UserAdd variant="Linear" color="#667185" size="16" />

                <p className="text-[14px] text-[#667185] leading-[20px] font-semibold">
                  Invite
                </p>
              </button>
              <button
                onClick={ToggleEditModal}
                className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]"
              >
                <Edit variant="Linear" color="#667185" size="16" />
              </button>
              <button
                onClick={ToggleDeleteModal}
                className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]"
              >
                <Trash variant="Linear" color="#667185" size="16" />
              </button>
            </div>
          </div>

          <table className="mt-[18px] md:mt-[24px] max-w-[490px]">
            <tr className="">
              <th className="text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                Status:
              </th>
              <td className="pb-[20px] pl-4 md:pl-6 ">
                <button
                  className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] mx-auto ${
                    result?.status === "On Hold"
                      ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                      : result?.status === "Ongoing"
                      ? "bg-[#F9FAFB] text-[#667185]"
                      : "bg-[#EDF7EE] text-[#4CAF50]"
                  }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                >
                  <p>{result.status}</p>
                </button>
              </td>
            </tr>
            <tr>
              <th className="pb-5 text-[14px] text-[#667185] leading-[20px] font-medium text-left ">
                Start Date{" "}
              </th>
              <td className="pb-[20px] pl-4 md:pl-6 ">
                <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                  {result.time}
                </p>
              </td>
            </tr>
            <tr>
              <th className="pb-5 text-[14px] text-[#667185] leading-[20px] font-medium text-left ">
                Due date:{" "}
              </th>
              <td className="pb-[20px] pl-4 md:pl-6 ">
                <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                  {result.time}
                </p>
              </td>
            </tr>
            <tr>
              <th className="pb-5 text-[14px] text-[#667185] leading-[20px] font-medium text-left ">
                Description
              </th>
              <td className="pb-[20px] pl-4 md:pl-6 ">
                <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                  {result?.summary}
                </p>
              </td>
            </tr>
          </table>
        </div>{" "}
        <Tabs>
          <TabList style={{}}>
            <Tab
              color={"#667185"}
              fontSize="14px"
              _selected={{
                borderColor: "#F05800",
                focusBorderColor: "pink.400",
                color: "#000",
              }}
            >
              Activities
            </Tab>
            <Tab
              color={"#667185"}
              fontSize="14px"
              _selected={{
                borderColor: "#F05800",
                focusBorderColor: "pink.400",
                color: "#000",
              }}
            >
              Task Board
            </Tab>
            <Tab
              color={"#667185"}
              fontSize="14px"
              _selected={{
                borderColor: "#F05800",
                focusBorderColor: "pink.400",
                color: "#000",
              }}
            >
              Milestones
            </Tab>
            <Tab
              color={"#667185"}
              fontSize="14px"
              _selected={{
                borderColor: "#F05800",
                focusBorderColor: "pink.400",
                color: "#000",
              }}
            >
              Documents
            </Tab>
            <Tab
              color={"#667185"}
              fontSize="14px"
              _selected={{
                borderColor: "#F05800",
                focusBorderColor: "pink.400",
                color: "#000",
              }}
            >
              Members
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ProjectActivities />
            </TabPanel>
            <TabPanel>
              <TaskBoard project={result} tasks={TASKS} />
            </TabPanel>
            <TabPanel>
              <Milestone />
            </TabPanel>
            <TabPanel>
              <Document />
            </TabPanel>
            <TabPanel>
              <ProjectMembers />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* Delete Project */}
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
                Delete Project
              </p>

              <p className="text-[14px]  text-[#667185] leading-[20px] font-normal text-center mt-2  ">
                Are you sure you want to delete this project? This action cannot
                be undone.
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
        {/* Edit Modal */}
        <ModalLeft isOpen={isEditOpen} onClose={HandleEditModalClose}>
          <div>
            <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px]  md:flex justify-between items-center ">
              <div className="flex items-center gap-[16px]">
                <Maximize4 variant="Linear" color="#667185" size="16" />{" "}
                <div className="h-[32px] w-[1px] bg-[#D0D5DD]" />
                <div className="flex items-center">
                  <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                    Edit Milestone
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
                  Milestone Title
                </label>
                <div className=" relative  mt-[16px]  flex items-center">
                  <input
                    type="text"
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
              <div className="mb-[24px]">
                <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                  Summary
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

              <div className="flex-item flex-col md:flex-row w-full gap-5">
                {" "}
                <div className="mb-[24px] w-[60%]">
                  <label className="text-[14px] text-[#667185] leading-[20px]   mb-[8px] md:mb-[16px]">
                    Cost
                  </label>
                  <div className=" relative  mt-[16px]  flex items-center">
                    <input
                      type="text"
                      placeholder="$ 0.00"
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
                    Status
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
                      <option value="High">On Hold</option>
                      <option value="Medium">Ongoing</option>
                      <option value="Low">Completed</option>
                    </select>
                  </div>
                </div>
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
                  Summary
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
      </div>
    </div>
  );
};

export default ProjectDetails;
