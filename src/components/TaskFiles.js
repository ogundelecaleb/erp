import { Import, Trash } from "iconsax-react";
import React, { useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { ClipLoader } from "react-spinners";

const TaskFiles = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="py-[18px] lg:py-[24px] px-[16px] md:px-[20px] mb-[24px] md:mb-[32px]  border-[0.6px]  border-[#98A2B3] border-dashed rounded-[8px] flex-item gap-2 md:gap-4 ">
        <button className="h-[48px] w-[48px] rounded-full  hover:bg-[#b0b8c4] bg-[#98A2B3] flex-center">
          <RiUploadCloud2Line />
        </button>
        <div className="flex flex-col justify-between flex-1 h-full">
          <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
            Upload your document
          </p>
          <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
            Max 5 MB
          </p>
        </div>

        <button className="border-[0.2px]   w-[79px] bg-[#F05800] flex items-center justify-center text-center rounded-[8px] py-[12px] text-[14px] font-medium text-white">
          {!isLoading ? (
            <ClipLoader color={"white"} size={20} />
          ) : (
            <> Upload </>
          )}
        </button>
      </div>
      <div className="border-t-[0.8px]  border-[#E4E7EC] pt-[24px] md:pt-[32px] ">
        <ul>
          <li className="p-[12px] md:p-[16px] xl:p-[20px] mb-[20px] flex-item gap-[8px] md:gap-[16px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]">
            <img
              src="./assets/download.png"
              alt="download"
              className="w-[56px] h-[56px] "
            />

            <div className="flex flex-col justify-between h-full flex-1">
              <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                Dashboard card.png
              </p>
              <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                1.2 MB
              </p>
            </div>

            <button className="h-[48px] w-[48px] rounded-[6px]  hover:bg-[#73c575] bg-[#4CAF50] flex-center">
              {" "}
              <Import variant="Linear" color="#FFF" size="24" />
            </button>
            <button className="h-[48px] w-[48px] rounded-[6px]  hover:bg-[#f26056] bg-[#F44336] flex-center">
              {" "}
              <Trash variant="Linear" color="#FFF" size="24" />
            </button>
          </li>
          <li className="p-[12px] md:p-[16px] xl:p-[20px] mb-[20px] flex-item gap-[8px] md:gap-[16px] border-[0.2px] border-[#98A2B3] bg-white shadow-xl rounded-lg shadow-[#F0F2F5]">
            <img
              src="./assets/download.png"
              alt="download"
              className="w-[56px] h-[56px] "
            />

            <div className="flex flex-col justify-between h-full flex-1">
              <p className=" text-[14px] md:text-base  text-[#000] leading-[20px] font-medium text-left ">
                Dashboard card.png
              </p>
              <p className="text-[14px]  text-[#667185] leading-[20px] font-medium ">
                1.2 MB
              </p>
            </div>

            <button className="h-[48px] w-[48px] rounded-[6px]  hover:bg-[#73c575] bg-[#4CAF50] flex-center">
              {" "}
              <Import variant="Linear" color="#FFF" size="24" />
            </button>
            <button className="h-[48px] w-[48px] rounded-[6px]  hover:bg-[#f26056] bg-[#F44336] flex-center">
              {" "}
              <Trash variant="Linear" color="#FFF" size="24" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskFiles;
