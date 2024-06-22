import { Add, Menu, Trash } from "iconsax-react";
import React, { useState } from "react";
import { BugSetupData, TaskSetupData } from "../Data";
import { ClipLoader } from "react-spinners";

const BugSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-[65%]">
      <div className="rounded-lg overflow-hidden ">
        <div className="flex-between bg-white p-3">
          <div className="">
            <p className=" text-[16px] md:text-lg  text-[#000] leading-[24px] font-medium text-left ">
              Bug Stage
            </p>
            <p className=" text-[12px] md:text-md  text-[#000] leading-[18px] font-medium text-left ">
              System will consider the last stage as a completed project or task
              status.
            </p>
          </div>
          <buttion className="h-[40px] w-[40px] flex justify-center items-center bg-[#F0F2F5] rounded-md">
            <Add variant="Bold" color="#F05800" size="20" />
          </buttion>
        </div>
        <div class="overflow-x-auto rounded-lg">
          <table className="min-w-full mb-6 border-[0.8px] border-r-[0.8px]  border-l-[0.8px] border-[#E4E7EC] rounded-lg">
            <thead className="bg-light-gray">
              <tr className="">
                <th
                  scope="col"
                  className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                >
                  <div className="flex px-5   gap-[6px] md:gap-[12px] items-center">
                    <Menu variant="Bold" color="#667185" size="20" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="  border-b-[0.8px] border-[#E4E7EC] py-[12px] gap-[6px] md:gap-[12px] text-[14px] md:text-[16px] text-[#98A2B3]  font-medium leading-[20px] md:leading-[24px] tracking-[0.2%]"
                >
                  <div className="flex justify-center gap-[6px] md:gap-[12px] items-center my-0">
                    Color
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
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <div>Loading...</div>}
              {!isLoading && BugSetupData.length === 0 && (
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
              {BugSetupData &&
                BugSetupData?.map((result) => (
                  <tr key={result.name} className="mb-2 hover:bg-light-gray">
                    <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      <Menu variant="Bold" color="#667185" size="20" />
                    </td>

                    <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#1A202C] font-medium text-left  ">
                      <button
                        className={` w-[60px] md:w-[90px] h-[24px] mx-auto bg-[${result.color}]   text-[10px] md:text-[12px]  font-semibold leading-[16px] md:leading-[18px]`}
                      ></button>
                    </td>
                    <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      <input
                        className="w-[180px] md:w-[292px] border-[0.2px] p-2 rounded-md border-[#98A2B3]"
                        value={result.name}
                      />
                    </td>
                    <td className="whitespace-nowrap py-[16px] bg-white  px-5  border-b-[0.8px] border-[#E4E7EC] text-[14px] leading-[24px] tracking-[0.2px] text-[#667185] font-medium text-left  ">
                      <Trash variant="Bold" color="#F44336" size="20" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex-item justify-end pt-5 border-t-[0.2px] border-[#98A2B3]">
        <button className="border-[0.2px]  border-[#98A2B3] w-[99px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
          {!isLoading ? (
            <ClipLoader color={"white"} size={20} />
          ) : (
            <> Save changes</>
          )}
        </button>
      </div>
    </div>
  );
};

export default BugSetup;
