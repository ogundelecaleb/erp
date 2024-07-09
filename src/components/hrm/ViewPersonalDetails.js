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

const ViewPersonalDetails = () => {
  return (
    <div>
      {" "}
      <div className=" w-full overflow-auto bg-[#fff] p-[10px] md:p-[20px] ">
        <div className="flex-item flex-col md:flex-row gap-[20px] mb-[24px]">
          <div className=" w-full md:w-[50%]   border-[0.2px] border-[#98a2b3] rounded-[8px] ">
            <div className="p-[14px] md:p-[20px]  border-b-[0.2px] border-[#98a2b3] ">
              {" "}
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                Personal Details
              </p>
            </div>

            <ul className="p-[14px] md:p-[20px]">
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Name:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                  ogundele caleb
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Date of Birth:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  BCOO8ACC
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Emai address
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  117
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Phone
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  CGST SGST
                </p>
              </li>
              <li className="flex-between ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Gender:
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
                Location Details{" "}
              </p>
            </div>

            <ul className="p-[14px] md:p-[20px]">
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Location Type:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                  ogundele caleb
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  Country:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  BCOO8ACC
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  State:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  117
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  City:
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  CGST SGST
                </p>
              </li>
              <li className="flex-between ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                  House Address:{" "}
                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  Male
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] mb-[24px]">
          <div className=" w-full md:w-[50%]   border-[0.2px] border-[#98a2b3] rounded-[8px] ">
            <div className="p-[14px] md:p-[20px]  border-b-[0.2px] border-[#98a2b3] ">
              {" "}
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                Document Details{" "}
              </p>
            </div>
            <ul className="p-[14px] md:p-[20px]">
              <li className="mb-[16px] md:mb-[24px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-2 ">
                  Certificate:{" "}
                </p>
                <div className="p-[8px] md:p-[14px]  border-[0.2px] border-[#98a2b3] rounded-[8px] flex gap-[16px]">
                  <img
                    src="./assets/pdf.png"
                    alt="pdf"
                    className="h-[30px] w-[22px] md:h-[40px] md:w-[32px]"
                  />
                  <div className="flex-1">
                    <p className="text-[#475367] text-[12px] md:text-[14px] xl:text-[14px] font-medium leading-[20px] ">
                      Ogundele Certificate{" "}
                    </p>
                    <p className="text-[#667185] text-[12px] md:text-[14px] xl:text-[14px] font-normal leading-[20px] ">
                      200 KB – 07 Jul, 2024{" "}
                    </p>
                  </div>

                  <FolderOpen variant="Bold" size="16" color="#F05800" />
                </div>
              </li>
              <li className="mb-[16px] md:mb-[24px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-2 ">
                  CV:
                </p>
                <div className="p-[8px] md:p-[14px]  border-[0.2px] border-[#98a2b3] rounded-[8px] flex gap-[16px]">
                  <img
                    src="./assets/pdf.png"
                    alt="pdf"
                    className="h-[30px] w-[22px] md:h-[40px] md:w-[32px]"
                  />
                  <div className="flex-1">
                    <p className="text-[#475367] text-[12px] md:text-[14px] xl:text-[14px] font-medium leading-[20px] ">
                      Ogundele CV
                    </p>
                    <p className="text-[#667185] text-[12px] md:text-[14px] xl:text-[14px] font-normal leading-[20px] ">
                      200 KB – 07 Jul, 2024{" "}
                    </p>
                  </div>

                  <FolderOpen variant="Bold" size="16" color="#F05800" />
                </div>
              </li>
              <li className="mb-[16px] md:mb-[24px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-2 ">
                  Photo:
                </p>
                <div className="p-[8px] md:p-[14px]  border-[0.2px] border-[#98a2b3] rounded-[8px] flex gap-[16px]">
                  <img
                    src="./assets/img.png"
                    alt="pdf"
                    className="h-[30px] w-[22px] md:h-[40px] md:w-[32px]"
                  />
                  <div className="flex-1">
                    <p className="text-[#475367] text-[12px] md:text-[14px] xl:text-[14px] font-medium leading-[20px] ">
                      Ogundele Photo
                    </p>
                    <p className="text-[#667185] text-[12px] md:text-[14px] xl:text-[14px] font-normal leading-[20px] ">
                      200 KB – 07 Jul, 2024{" "}
                    </p>
                  </div>

                  <FolderOpen variant="Bold" size="16" color="#F05800" />
                </div>
              </li>
              <li className="mb-[16px] md:mb-[24px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] mb-2 ">
                  Results:
                </p>
                <div className="p-[8px] md:p-[14px]  border-[0.2px] border-[#98a2b3] rounded-[8px] flex gap-[16px]">
                  <img
                    src="./assets/pdf.png"
                    alt="pdf"
                    className="h-[30px] w-[22px] md:h-[40px] md:w-[32px]"
                  />
                  <div className="flex-1">
                    <p className="text-[#475367] text-[12px] md:text-[14px] xl:text-[14px] font-medium leading-[20px] ">
                      Ogundele Result
                    </p>
                    <p className="text-[#667185] text-[12px] md:text-[14px] xl:text-[14px] font-normal leading-[20px] ">
                      200 KB – 07 Jul, 2024{" "}
                    </p>
                  </div>

                  <FolderOpen variant="Bold" size="16" color="#F05800" />
                </div>
              </li>
            </ul>
           
          </div>
          <div className=" w-full md:w-[50%]    ">
          <div className=" w-full   border-[0.2px] border-[#98a2b3] rounded-[8px] ">
            <div className="p-[14px] md:p-[20px]  border-b-[0.2px] border-[#98a2b3] ">
              {" "}
              <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                Bank Details{" "}
              </p>
            </div>

            <ul className="p-[14px] md:p-[20px]">
              <li className="flex-between mb-[14px] md:mb-[20px] ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Account Holder Name:                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px] ">
                  ogundele caleb
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Account Number:                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  BCOO8ACC
                </p>
              </li>
              <li className="flex-between mb-[14px] md:mb-[20px]">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Bank Name:                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  117
                </p>
              </li>
              <li className="flex-between ">
                <p className="text-[#000] text-[14px] md:text-[14px] xl:text-[16px] font-normal leading-[24px]  ">
                Tax Payer ID:                </p>

                <p className="text-[#667185] text-[14px] md:text-[14px] xl:text-[16px] font-medium leading-[24px]  ">
                  CGST SGST
                </p>
              </li>
             
            </ul>
          </div>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPersonalDetails;
