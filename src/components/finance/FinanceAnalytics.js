import React, { useState } from "react";
import { TaskAnalytics } from "../Data";
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

export const AccountBalance = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=" rounded-[8px] w-full md:w-[50%]  overflow-auto">
      <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
        <p className="text-[18px]  leading-[27px] text-[#000]  ">
        Account balance
        </p>
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
                    <tr key={result.task} className="mb-2 hover:bg-light-gray">
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
  );
};

export const LatestIncome = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=" rounded-[8px] w-full md:w-[50%]  overflow-auto">
      <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
        <p className="text-[18px]  leading-[27px] text-[#000]  ">
          Latest income
        </p>
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
                      Bank Name
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Holder Name
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Balance
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
                    <tr key={result.task} className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        {result.time}
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        {result.project}
                      </td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <p className="line-clamp-2 ">{result.task}</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LatestExpense = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className=" rounded-[8px] w-full md:w-[50%]  overflow-auto">
      <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  border-[0.8px]  border-[#D0D5DD]">
        <p className="text-[18px]  leading-[27px] text-[#000]  ">
          Latest income
        </p>
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
                      Bill Date
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Vendor
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                  >
                    <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                      Amount
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
                        No Data
                      </h3>
                    </td>
                  </tr>
                )}
                {TaskAnalytics &&
                  TaskAnalytics?.map((result) => (
                    <tr key={result.task} className="mb-2 hover:bg-light-gray">
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        {result.time}
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        {result.project}
                      </td>

                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <p className="line-clamp-2 ">{result.task}</p>
                      </td>
                      <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                        <p className="line-clamp-2 ">{result.task}</p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export const pieData = {
    labels: ["Product Sales", "Maintenance Sales"],
    datasets: [
      {
        label: "Number of Task",
        data: [5, 12],
        backgroundColor: [
          "rgba(255, 173, 51, 1)",
          
          "rgba(112, 191, 115, 1)",
          
        ],
        borderColor: [
          "rgba(255, 173, 51, 1)",
         
          "rgba(112, 191, 115, 1)",
         
        ],
        borderWidth: 1,
        borderJoinStyle: "round",
        spacing: 3,
        borderRadius:8
      },
    ],
  };

export const IncomeCategory = () => {
    const [isLoading, setIsLoading] = useState(false); 


    return (
<div className=" rounded-[8px] w-full md:w-[50%] h-[500px] border-[0.8px]  border-[#D0D5DD]  ">
          <div className="p-[16px] md:p-[20px] flex-between bg-white rounded-tr-lg rounded-tl-lg  ">
            <p className="text-[18px]  leading-[27px] text-[#000]  ">Income by category</p>
            
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
