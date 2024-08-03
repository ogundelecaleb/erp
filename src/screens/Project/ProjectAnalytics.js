import { MenuBoard, MobileProgramming, Task, User } from "iconsax-react";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import faker from "faker";
import { TaskAnalytics } from "../../components/Data";
import { ProjectStatus, TaskCard } from "../../components/project/ProjectAnalytics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  width: "100%",
  plugins: {
    // legend: {
    //   position: 'top',
    // },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const pieData = {
  labels: ["On Hold", "In Progress", "Finished"],
  datasets: [
    {
      label: "Number of Task",
      data: [5, 8, 12],
      backgroundColor: [
        "rgba(255, 173, 51, 1)",
        "rgba(243, 121, 51, 1)",
        "rgba(112, 191, 115, 1)",
        
      ],
      borderColor: [
        "rgba(255, 173, 51, 1)",
        "rgba(243, 121, 51, 1)",
        "rgba(112, 191, 115, 1)",
       
      ],
      borderWidth: 1,
      borderJoinStyle: "round",
      spacing: 3,
      borderRadius:8
    },
  ],
};

const ProjectAnalytics = () => {
  const [isLoading, setIsLoading] = useState("");
  return (
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
          
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total Project
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <MenuBoard variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              8
            </p>
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              View project
            </p>
          </div>
        </li>
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total Task
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <Task variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              22
            </p>
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              View tasks
            </p>
          </div>
        </li>
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total Bugs
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <MobileProgramming variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              7
            </p>
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              View bug
            </p>
          </div>
        </li>
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total Users
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <User variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              8
            </p>
            <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
              View users
            </p>
          </div>
        </li>
      </ul>
      <div className="bg-white rounded-lg border-[0.2px] border-[#98a2b3] mt-[20px] h-[459px] w-full flex-center mt">
        <Line className="w-full" options={options} data={data} />
      </div>
      <div className="flex gap-[30px]  mt-[24px]">
       <TaskCard/>
       <ProjectStatus/>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
