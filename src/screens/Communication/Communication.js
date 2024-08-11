import { CloseCircle, SearchNormal1 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
import LastMessage from "../../components/communication/LastMessage";

const Communication = () => {
  return (
    <div className="p-[20px] bg-[#F2F2F2] min-h-screen ">
      <div className="border-[0.2px] border-[#98a2b3] rounded-[8px]  bg-[#ffff] ">
        <div className="border-b border-b-[#E4E7EC] h-full p-[16px] md:p-[20px] block md:flex justify-between items-center ">
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center">
              <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                Communication /{" "}
              </p>
              <Link to="/usermanagement">
                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px] ">
                  &nbsp; #Eaglion’s Workspace /{" "}
                </p>
              </Link>
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                &nbsp; Ogundele Caleb
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
          <div className="flex items-center  ">
            <div></div>
          </div>
        </div>
      </div>

      <div className="flex   ">
        <div className="w-[334px] bg-white border-[0.2px] border-[#E4E7EC] ">
          <div className="p-3 md:p-4 flex-item justify-between border-b-[0.8px] border-[#E4E7EC]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              Direct Messages
            </p>
            <button>
              <CloseCircle size={20} color={"#000"} />
            </button>
          </div>
          <LastMessage />
          <div className="p-3 md:p-4 flex-item justify-between border-b-[0.8px] border-t-[0.8px] border-[#E4E7EC]">
            <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
              All Members (200)
            </p>
            <button>
              <CloseCircle size={20} color={"#000"} />
            </button>
          </div>
          <LastMessage />
        </div>
        <div className="w-full border-[0.2px] border-[#E4E7EC] bg-white min-h-screen">
          <div className="mt-[30%] flex  justify-center w-full">
            <div>
              <img
                src="./assets/EmptyState.png"
                className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] lg:h-[150px] mx-auto lg:w-[150px] mb-2"
                alt=""
              />
              <p className="text-[#667185] text-center text-[18px] md:text-[20px] xl:text-[24px] font-medium leading-[24px] max-w-[217px] ">
                Start a new conversation here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
