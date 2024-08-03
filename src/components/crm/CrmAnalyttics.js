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
import { TaskAnalytics } from "../Data";

  export const CreatedDeal = () => {
    const [isLoading, setIsLoading] = useState(false)
    return(
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
        
    )
  }

  export const ModifiedDeal = () => {
    const [isLoading, setIsLoading] = useState(false)
    return(
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
                          No Deal
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

    )}