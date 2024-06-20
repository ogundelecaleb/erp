import { SearchNormal1 } from "iconsax-react";
import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
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
  BarElement,
} from "chart.js";
import { Doughnut, Bar, Pie } from "react-chartjs-2";
import faker from "faker";
import { MilestoneData, UserData } from "../../components/Data";
import { FaLaptopHouse } from "react-icons/fa";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
);

export const dataPie = {
  labels: ["Red", "Blue", "Yellow", "Green"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 11, 8],
      backgroundColor: [
        "rgba(255, 173, 51, 1)",
        "rgba(243, 121, 51, 1)",
        "rgba(112, 191, 115, 1)",
        "rgba(246, 105, 94, 1)",
      ],
      borderColor: [
        "rgba(255, 173, 51, 1)",
        "rgba(243, 121, 51, 1)",
        "rgba(112, 191, 115, 1)",
        "rgba(246, 105, 94, 1)",
      ],
      borderWidth: 1,
      spacing: 3,
      borderJoinStyle: "round",
      borderRadius: 3,
    },
  ],
};

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
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(112, 191, 115, 1)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(243, 121, 51, 1)",
    },
  ],
};

export const pieData = {
  labels: ["In Progress", "Finished"],
  datasets: [
    {
      label: "Number of Task",
      data: [12, 4],
      backgroundColor: ["rgba(243, 121, 51, 1)", "rgba(249, 250, 251, 1)"],
      borderColor: ["rgba(243, 121, 51, 1)", "rgba(249, 250, 251, 1)"],
      borderWidth: 1,
    },
  ],
};

const ReportDetails = () => {
  const location = useLocation();
  const result = location.state;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="p-[20px] bg-[#F2F2F2] ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px] h-full w-full bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Project /{" "}
              </p>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Manage projects
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
        </div>
        <div className="p-[10px] md:p-[20px]">
          <div className="flex-item flex-col md:flex-row gap-[20px]">
            <div className=" rounded-[8px] w-full md:w-[40%] h-[375px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD] ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                  Project Status
                </p>
              </div>
              <div className="px-[16px] mt-5 h-[300px] ">
                {" "}
                <table className="mt-[18px] md:mt-[24px] max-w-[490px]">
                  <tr className="">
                    <th className="text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                      Project Name
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
                        <p>{result?.status}</p>
                      </button>
                    </td>
                  </tr>
                  <tr className="">
                    <th className="text-[14px] pb-[20px] text-[#667185] leading-[20px] font-medium text-left ">
                      Project Status:
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
                        <p>{result?.status}</p>
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
                      Total Members:
                    </th>
                    <td className="pb-[20px] pl-4 md:pl-6 ">
                      <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                        5
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th className="pb-5 text-[14px] text-[#667185] leading-[20px] font-medium text-left ">
                      Project Progress
                    </th>
                    <td className="pb-[20px] pl-4 md:pl-6 ">
                      <p className=" text-[14px]  text-[#000] leading-[20px] font-medium text-left ">
                        33%
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className=" rounded-[8px] w-full md:w-[60%] h-[375px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg border-b-[0.8px]  border-[#D0D5DD]  ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                  Milestone Progress
                </p>
              </div>
              <div className="flex-center mt-5 h-[250px] ">
                <Doughnut
                  data={pieData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    rotation: -90,
                    circumference: 180,
                    // heigth:"600px",
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          pointStyle: "square",
                          usePointStyle: true,
                          // fullSize: false,
                          pointStyleWidth: 10,
                          font: {
                            size: 10,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex-item flex-col md:flex-row gap-[20px] mt-4">
            <div className=" rounded-[8px] w-full md:w-[40%] h-[375px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-b-[0.8px]  border-[#D0D5DD] ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                  Project Status
                </p>
              </div>
              <div className="px-[16px] mt-5 h-[300px] ">
                {" "}
                <Bar options={options} data={data} />
              </div>
            </div>
            <div className=" rounded-[8px] w-full md:w-[60%] h-[375px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg border-b-[0.8px]  border-[#D0D5DD]  ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                  Milestone Progress
                </p>
              </div>
              <div className="flex-center mt-5 h-[250px] ">
                {/* <Doughnut
                  data={pieData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    rotation: -90,
                    circumference: 180,
                    // heigth:"600px",
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          pointStyle: "square",
                          usePointStyle: true,
                          // fullSize: false,
                          pointStyleWidth: 10,
                          font: {
                            size: 10,
                          },
                        },
                      },
                    },
                  }}
                /> */}
                <Pie data={dataPie} />
              </div>
            </div>
          </div>

          <div className="flex gap-[30px]  mt-[24px]">
            <div className=" rounded-[8px] w-full md:w-[40%]  overflow-auto">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
                  Users
                </p>
                <button className="px-[16px] py-[4px] bg-[rgb(249,250,251)] shadow text-white text-[14px]  leading-[20px] flex-item gap-2  rounded-[24px]">
                  <p className="text-[14px]  leading-[20px] text-[#667185]  ">
                    9 Tasks completed out of 24
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
                              Name
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                          >
                            <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                              Assigned Tasks
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                          >
                            <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                              Done Tasks{" "}
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && UserData.length === 0 && (
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
                        {UserData &&
                          UserData?.map((result) => (
                            <tr
                              key={result.name}
                              className="mb-2 hover:bg-light-gray"
                            >
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                                {result.name}
                              </td>
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                                {result.assignedTask}
                              </td>
                             
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-center  ">
                                <p className="line-clamp-2 ">{result.done}</p>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className=" rounded-[8px] w-full md:w-[60%] h-[500px] border-[0.8px]  border-[#D0D5DD]  ">
              <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg border-b-[0.8px]  border-[#D0D5DD]  ">
                <p className="text-[18px]  leading-[27px] text-[#000]  ">
Milestones                </p>
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
                          Name
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                          >
                            <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                           Cost
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                          >
                            <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                           Progress
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                          >
                            <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                           Status
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                          >
                            <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                              Due Date
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && MilestoneData.length === 0 && (
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
                        {MilestoneData &&
                          MilestoneData?.map((result) => (
                            <tr
                              key={result.name}
                              className="mb-2 hover:bg-light-gray"
                            >
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                                {result.name}
                              </td>
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                                {result.cost}
                              </td>
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                                {result.progress}
                              </td>
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                                <button
                                  className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[90px] py-[2px] md:py-[4px] mx-auto ${
                                    result.status === "Incompleted"
                                      ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                                      
                                      : "bg-[#EDF7EE] text-[#4CAF50]"
                                  }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                                >
                                  <p>{result?.status}</p>
                                </button>
                              </td>
                              <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-center  ">
                                <p className="line-clamp-2 ">{result.date}</p>
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
      </div>
    </div>
  );
};

export default ReportDetails;
