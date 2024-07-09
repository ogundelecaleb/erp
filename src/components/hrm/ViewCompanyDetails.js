import React from "react";
import {
  LogTime,
  PriceDetails,
  Reports,
  WarehouseDetails,
} from "../inventory/InvetoryDetails";
import Purchase from "../inventory/Purchase";
import Vendors from "../inventory/Vendors";
import { FolderOpen } from "iconsax-react";

const ViewCompanyDetails = () => {
  return (
    <div>
      {" "}
      <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
        <div className="flex flex-col md:flex-row gap-[20px] mb-[24px]">
          <div className=" w-full md:w-[50%]   border-[0.2px] border-[#98a2b3] rounded-[8px] ">
            <div className="p-[14px] md:p-[20px]  border-b-[0.2px] border-[#98a2b3] ">
              {" "}
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                Company Details{" "}
              </p>
            </div>

            <ul className="p-[14px] md:p-[20px]">
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Employee ID:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                  ogundele caleb
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Branch:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  BCOO8ACC
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Department:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  117
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Designation:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  CGST SGST
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Date Joined:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Role:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
              <li className="flex-between ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Employee Code:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
            </ul>
          </div>

          <div className=" w-full md:w-[50%]   border-[0.2px] border-[#98a2b3] rounded-[8px] ">
            <div className="p-[14px] md:p-[20px]  border-b-[0.2px] border-[#98a2b3] ">
              {" "}
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                Rate Details{" "}
              </p>
            </div>

            <ul className="p-[14px] md:p-[20px]">
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Hours Per Day:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                  ogundele caleb
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Days Per Week:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  BCOO8ACC
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Hours Per Month:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  117
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Days Per Month:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  CGST SGST
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Annual Salary:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Fixed Salary:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Rate Per Day:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
              <li className="flex-between mb-[14px]  ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Rate Per Hour:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ViewCompanyDetails;
