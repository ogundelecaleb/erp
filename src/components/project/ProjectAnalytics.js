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

export const  ProjectStatus = () => {
    return(
        <div className=" rounded-[8px] w-full md:w-[50%] h-[500px] border-[0.8px]  border-[#D0D5DD]  ">
        <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  ">
          <p className="text-[18px]  leading-[27px] text-[#000]  ">Project Status</p>
          
        </div>
        <div className="flex-center mt-5 h-[300px] ">
          <Doughnut data={pieData} options={{
            responsive: true,
            maintainAspectRatio: false,
            
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
                }}/>
        </div>
      </div>
    )
}

export const TaskCard = () => {
    const [isLoading, setIsLoading] = useState(false)
    return(
        <div className=" rounded-[8px] w-full md:w-[50%]  overflow-auto">
        <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
          <p className="text-[18px]  leading-[27px] text-[#000]  ">Task</p>
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
                        Task
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                    >
                      <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                        Project
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
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                          {result.task}
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                          {result.project}
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                          <button
                            className={`rounded-[20px] md:rounded-[40px] w-[60px] md:w-[74px] py-[2px] md:py-[4px] mx-auto ${
                              result.status === "Pending"
                                ? "bg-[rgb(255,245,230)] text-[#FF9800]"
                                : result.status === "Ongoing"
                                ? "bg-[#F9FAFB] text-[#667185]"
                                : "bg-[#EDF7EE] text-[#4CAF50]"
                            }  text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                          >
                            <p>{result?.status}</p>
                          </button>
                        </td>
                        <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-center  ">
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
    )

}