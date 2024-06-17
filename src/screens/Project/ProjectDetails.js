import {
  SearchNormal1,
  Calendar2,
  MobileProgramming,
  UserAdd,
  Edit,
  Trash,
} from "iconsax-react";
import React from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ProjectActivities from "../../components/ProjectActivities";
import TaskList from "../../components/ProjectTask";
import TaskBoard from "../../components/ProjectTaskBoard";
import { TASKS } from "../../components/Data";
import Milestone from "../../components/Milestone";

const ProjectDetails = () => {
  const location = useLocation();
  const result = location.state;
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              // onClick={() => toggleImportModal()}
              className="flex items-center gap-[8px] "
            >
              <p className="text-[14px] text-[#667185] leading-[20px]">
                Bug report
              </p>

              <Calendar2 variant="Linear" color="#667185" size="16" />
            </button>
            <button
              // onClick={() => toggleImportModal()}
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
              <button className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]">
                <Edit variant="Linear" color="#667185" size="16" />
              </button>
              <button className="border-[0.8px] px-[14px] py-[8px] flex gap-[6px] md:gap-[10px] items-center border-[#D0D5DD] rounded-[6px]">
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
          <Milestone/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectDetails;
