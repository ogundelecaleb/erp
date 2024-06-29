import {
  MenuBoard,
  MobileProgramming,
  Tag,
  Task,
  TaskSquare,
  User,
  UserOctagon,
} from "iconsax-react";
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
import { Bar, Doughnut, Line } from "react-chartjs-2";
import faker from "faker";
import { TaskAnalytics } from "../../components/Data";

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

const labels = ["01", "02", "03", "04", "05", "06", "07"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "rgba(112, 191, 115, 1)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(243, 121, 51, 1)",
    // },
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
      borderRadius: 8,
    },
  ],
};

const CrmAnalytics = () => {
  const [isLoading, setIsLoading] = useState("");
  return (
    <div className="p-[20px] bg-[#F2F2F2]  ">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total Deals
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <Tag variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2px] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              $160,000.00
            </p>
          </div>
        </li>
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total No of Deal
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <TaskSquare variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2px] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              12
            </p>
          </div>
        </li>
        <li className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-[156px] w-full max-w-[270px] bg-[#ffff] flex flex-col justify-between ">
          <div className="px-[20px] py-[24px]  flex-between">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
              Total Client
            </p>
            <buttion className="h-[32px] w-[32px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
              <UserOctagon variant="Linear" color="#667185" size="16" />
            </buttion>
          </div>
          <div className="px-[20px] py-[13px] border-t-[0.2px] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              10
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
          <div className="px-[20px] py-[13px] border-t-[0.2px] border-[#98A2B3] bg-[#F9FAFB] flex-between rounded-br-lg rounded-bl-lg ">
            {" "}
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[20px] font-bold leading-[24px]  ">
              100
            </p>
          </div>
        </li>
      </ul>
      <div className="bg-white rounded-lg border-[0.2px] border-[#98a2b3] mt-[20px] h-[459px] w-full  mt">
        <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD]">
          <p className="text-[18px]  leading-[27px] text-[#000]  ">Task</p>
          <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[16px]">
            <p className="text-[14px]  leading-[20px] text-[#667185]  ">
              May, 2024
            </p>{" "}
          </button>
        </div>
        <div className="px-[16px] mt-5 h-[350px] flex justify-center ">
          <Bar options={options} data={data} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-[30px]  mt-[24px]">
        <div className=" rounded-[8px] w-full md:w-[50%]  overflow-auto">
          <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
            <p className="text-[18px]  leading-[27px] text-[#000]  ">Recently created deals</p>
            <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[24px]">
              <p className="text-[14px]  leading-[20px] text-[#667185]  ">
               Table of 5
              </p>{" "}
            </button>
          </div>

          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full  sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <table className="min-w-full mb-6 border-b-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC]">
                  <thead className="bg-light-gray">
                    <tr className="">
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex justify-center gap-[6px] md:gap-[12px] items-center">
                        Deal Name
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                        Stage
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                         Created at
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
                        <tr
                          key={result.task}
                          className="mb-2 hover:bg-light-gray"
                        >
                          <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                            {result.task}
                          </td>
                          <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                            {result.project}
                          </td>
                         
                          <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                            <p className="line-clamp-2 ">{result.time}</p>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[8px] w-full md:w-[50%]  overflow-auto">
          <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
            <p className="text-[18px]  leading-[27px] text-[#000]  ">Recently modified deals</p>
            <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[24px]">
              <p className="text-[14px]  leading-[20px] text-[#667185]  ">
               Table of 5
              </p>{" "}
            </button>
          </div>

          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full  sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <table className="min-w-full mb-6 border-b-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC]">
                  <thead className="bg-light-gray">
                    <tr className="">
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex justify-center gap-[6px] md:gap-[12px] items-center">
                        Deal Name
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                        Stage
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                      >
                        <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                         Created at
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
                        <tr
                          key={result.task}
                          className="mb-2 hover:bg-light-gray"
                        >
                          <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                            {result.task}
                          </td>
                          <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                            {result.project}
                          </td>
                         
                          <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                            <p className="line-clamp-2 ">{result.time}</p>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmAnalytics;
